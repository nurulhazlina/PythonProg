/**
 * UMPSA Snake Game Tutorial — Google Apps Script
 * Deploy as Web App: Execute as Me, Anyone can access
 *
 * Tab routing by payload.type:
 *   student_reg  → Student_Reg
 *   pretest      → Pre_Test
 *   posttest     → Post_Test
 *   act_1..10   → Act_1..Act_10
 *   (legacy types → Activity_Log)
 */

function doPost(e) {
  try {
    var raw = e.postData ? e.postData.contents : '{}';
    var data = JSON.parse(raw);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    routeToSheet(ss, data);
    return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    Logger.log('doPost error: ' + err);
    return ContentService.createTextOutput(JSON.stringify({status:'error',msg:err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function routeToSheet(ss, data) {
  var type = (data.type || '').toLowerCase().trim();
  if (type === 'student_reg') {
    writeRow(ss, 'Student_Reg', studentRegHeaders(), studentRegRow(data));
  } else if (type === 'pretest') {
    writeRow(ss, 'Pre_Test', testHeaders(), testRow(data));
  } else if (type === 'posttest') {
    writeRow(ss, 'Post_Test', testHeaders(), testRow(data));
  } else if (/^act_\d+$/.test(type)) {
    writeRow(ss, 'Act_' + type.split('_')[1], activityHeaders(), activityRow(data));
  } else {
    writeRow(ss, 'Activity_Log', legacyHeaders(), legacyRow(data));
  }
}

function writeRow(ss, tabName, headers, values) {
  var sheet = ss.getSheetByName(tabName);
  if (!sheet) sheet = ss.insertSheet(tabName);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1,1,1,headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  sheet.appendRow(values);
}

function studentRegHeaders() {
  return ['matric','name','gender','age','mykid','home_state','class','school_code','phone','email','registered_at'];
}
function studentRegRow(d) {
  // supports 'student_X' keys (live form) and plain keys (simulator/legacy)
  var ts = d.registered_at || d.submitted_iso || new Date().toISOString();
  return [
    d.student_matric    ||d.matric    ||'',
    d.student_name      ||d.name      ||'',
    d.student_gender    ||d.gender    ||'',
    d.student_age       ||d.age       ||'',
    d.student_mykid     ||d.mykid     ||'',
    d.student_state     ||d.home_state||'',
    d.student_class     ||d.class_    ||d.class ||'',
    d.student_school_code||d.school_code||'',
    d.student_phone     ||d.phone     ||'',
    d.student_email     ||d.email     ||'',
    ts
  ];
}

function testHeaders() {
  var h=['matric','name','gender','age','mykid','home_state','class','school_code','phone','email','test_type','submitted_iso','score'];
  for(var i=1;i<=50;i++) h.push('Q'+i);
  return h;
}
function testRow(d) {
  var row=[
    d.matric||'',d.name||'',
    d.gender||'',d.age||'',d.mykid||'',d.home_state||d.state||'',
    d.class||'',d.school_code||'',d.phone||'',d.email||'',
    d.type||'',
    d.submitted_iso||new Date().toISOString(),
    d.score!==undefined?d.score:''
  ];
  var ans=d.answers||[];
  for(var i=0;i<50;i++) row.push(ans[i]!==undefined?ans[i]:'');
  return row;
}

function activityHeaders() {
  return [
    'matric','name','gender','age','mykid','home_state','class','school_code','phone','email','step','submitted_iso',
    'cal_confidence','cal_predicted','cal_reflection',
    't1_score_pct','t2_attempts','refl2_text','t3_attempts','t4_attempts',
    'concept_q1','concept_q2','concept_q3','concept_q4','concept_q5',
    'concept_score_pct','concept_passed','concept_attempts',
    'jr1','jr2','jr3','jr4','jr5',
    'post_confidence','post_actual','post_r1','post_r2','calibration_index'
  ];
}
function activityRow(d) {
  var ca=d.concept_answers||[];
  function cq(i){return ca[i]!==undefined?ca[i].answer:'';}
  return [
    d.matric||'',d.name||'',
    d.gender||'',d.age||'',d.mykid||'',d.home_state||d.state||'',
    d.class||'',d.school_code||'',d.phone||'',d.email||'',
    d.step||'',
    d.submitted_iso||new Date().toISOString(),
    d.cal_confidence!==undefined?d.cal_confidence:'',
    d.cal_predicted!==undefined?d.cal_predicted:'',
    d.cal_reflection||'',
    d.t1_score_pct!==undefined?d.t1_score_pct:'',
    d.t2_attempts!==undefined?d.t2_attempts:'',
    d.refl2_text||'',
    d.t3_attempts!==undefined?d.t3_attempts:'',
    d.t4_attempts!==undefined?d.t4_attempts:'',
    cq(0),cq(1),cq(2),cq(3),cq(4),
    d.concept_score_pct!==undefined?d.concept_score_pct:'',
    d.concept_passed!==undefined?(d.concept_passed?1:0):'',
    d.concept_attempts!==undefined?d.concept_attempts:'',
    d.jr1||'',d.jr2||'',d.jr3||'',d.jr4||'',d.jr5||'',
    d.post_confidence!==undefined?d.post_confidence:'',
    d.post_actual||'',d.post_r1||'',d.post_r2||'',
    d.calibration_index!==undefined?d.calibration_index:''
  ];
}

function legacyHeaders() {
  return ['type','matric','name','class','step','submitted_iso','payload_json'];
}
function legacyRow(d) {
  return [d.type||'',d.matric||'',d.name||'',d.class||'',d.step||'',
          d.submitted_iso||new Date().toISOString(),JSON.stringify(d)];
}

/* ── Test stub: run from Apps Script editor to verify ── */
function testDoPost() {
  var fake = { postData: { contents: JSON.stringify({
    type:'act_3', matric:'AB12345', name:'Test Student', class:'CS101', step:3,
    cal_confidence:3, cal_predicted:70, cal_reflection:'Variables will be hard',
    t1_score_pct:80, t2_attempts:2, refl2_text:'Doing ok', t3_attempts:1, t4_attempts:1,
    concept_answers:[{answer:1,correct:1},{answer:1,correct:1},{answer:1,correct:1},{answer:2,correct:0},{answer:1,correct:1}],
    concept_score_pct:80, concept_passed:false, concept_attempts:2,
    jr1:'I learned direction control',jr2:'Hardest part...',jr3:'I would improve by...',jr4:'',jr5:'',
    post_confidence:4, post_actual:'85', post_r1:'Prediction close', post_r2:'Asked for help',
    calibration_index:-15, submitted_iso:new Date().toISOString()
  })}};
  Logger.log(doPost(fake).getContent());
}

/* ── Utility: run once from Apps Script editor to reset all data sheets ── */
function clearAllDataSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tabs = ['Student_Reg','Pre_Test','Post_Test',
              'Act_1','Act_2','Act_3','Act_4','Act_5',
              'Act_6','Act_7','Act_8','Act_9','Act_10'];
  tabs.forEach(function(name) {
    var sheet = ss.getSheetByName(name);
    if (sheet) {
      sheet.clearContents();           // wipe ALL rows (data + header)
      Logger.log('Cleared: ' + name);
    } else {
      Logger.log('Not found (skipped): ' + name);
    }
  });
  Logger.log('Done — all data sheets cleared. Headers will be recreated on next submission.');
}

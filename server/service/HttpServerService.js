'use strict';


/**
 * Returns application name
 *
 * uuid String 
 * returns inline_response_200_15
 **/
exports.getHttpServerApplicationName = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:application-name" : "TypeApprovalRegister"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns application purpose
 *
 * uuid String 
 * returns inline_response_200_17
 **/
exports.getHttpServerApplicationPurpose = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:application-purpose" : "Type approvals for applications being active in the MBH SDN must be documented here."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns update periode
 *
 * uuid String 
 * returns inline_response_200_18
 **/
exports.getHttpServerDataUpdatePeriode = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:data-update-period" : "http-server-interface-1-0:DATA_UPDATE_PERIOD_TYPE_REAL_TIME"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns owner email address
 *
 * uuid String 
 * returns inline_response_200_20
 **/
exports.getHttpServerOwnerEmailAddress = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:owner-email-address" : "Thorsten.Heinze@telefonica.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns owner name
 *
 * uuid String 
 * returns inline_response_200_19
 **/
exports.getHttpServerOwnerName = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:owner-name" : "Thorsten Heinze"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns list of releases
 *
 * uuid String 
 * returns inline_response_200_21
 **/
exports.getHttpServerReleaseList = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:release-list" : [ {
    "release-number" : "0.0.1",
    "release-date" : "16.07.2021",
    "changes" : "Initial version."
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns release number
 *
 * uuid String 
 * returns inline_response_200_16
 **/
exports.getHttpServerReleaseNumber = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:release-number" : "0.0.1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

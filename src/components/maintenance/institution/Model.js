import React from 'react'
import PropTypes from 'prop-types';
import * as yup from 'yup'; 
// let yup = require('yup');


export const InstitutionModelValidation = yup.object().shape({
  institutionName: yup.string().required(),
  institutionCode: yup.string().required(),
  
});

export const  InstitutionModel = {
    id:'',
    merchantId:'',
    billingFileType:'',
    institutionName: '',
    institutionCode:'',
    paddingPos: '',
    paddingChar: '',
    defaultPaymentAllowed: '',
    isStandard: false,
    batchNumberMaxVal: '',
    decCodeMaxLen:'',
    batchNumInitVal:'',
    isCounterResetAllowed: false,
    batchNumLenLimit:'',
    currentbatchNum:''
  };

  InstitutionModel.PropTypes={
    isStandard:PropTypes.bool
  }

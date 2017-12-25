import { updateState, toggleDashboard } from './action';
import { UpdateSrc } from '../TestFrame/action';
import Store from '../../Redux/Store';
// import { push } from 'react-router-redux'

const { dispatch, getState } = Store

export const scanQrcode = () => {
  console.log('scanQrcodeStart')
  ap.scan(function (res) {
    ap.alert(res.code);
    console.log('\nscanQrcodeSuccess', res)
    const src = res.code || ''
    dispatch(UpdateSrc(src))
  });
  // var btnScanQR = document.querySelector('#J_btn_scanQR');
  // var btnScanBAR = document.querySelector('#J_btn_scanBAR');
  // btnScanQR.addEventListener('click', function () {
  //   ap.scan(function (res) {
  //     ap.alert(res.code);
  //   });
  // });
  // btnScanBAR.addEventListener('click', function () {
  //   ap.scan({
  //     type: 'bar'
  //   }, function (res) {
  //     ap.alert(res.code);
  //   });
  // });
}

export default {
  scanQrcode,
}



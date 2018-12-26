import { updateState, toggleDashboard } from './action';
import { UpdateSrc } from '../TestFrame/action';
import TabBarNavAction from '../TabBarNav/action';
import Store from '../../Redux/Store';

const { dispatch, getState } = Store

export const scanQrcode = () => {
  process.env.NODE_ENV === "production" || console.log('scanQrcodeStart')
  ap.scan(function (res) {
    ap.alert(res.code);
    process.env.NODE_ENV === "production" || console.log('\nscanQrcodeSuccess', res)
    const src = res.code || ''
    dispatch(UpdateSrc(src))
    dispatch(TabBarNavAction.updateState({
      selectedTab: 'view'
    }))
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



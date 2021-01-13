const SERVICE = '';
let uri = '';
switch (SERVICE) {
	case 'dev':
		uri = 'http://localhost:8080/';
		break;
	case 'test':
		uri = 'http://10.0.0.198:6080/';
		break;
	case 'pre':
		uri = 'http://onwaytest.re-fire.com/';
		break;
	case 'prod':
		uri = 'http://47.107.18.28/';
		break;
	default:
		uri = 'http://localhost:8080/';
}
export default {
  host: uri,//接口
  service:uri=='' ? ' http://onway.re-fire.com/' : uri+'/'//图片
  // service:uri=='' ? 'http://onwaytest.re-fire.com/' : uri+'/'//图片
}
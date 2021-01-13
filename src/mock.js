const Mock = require('mockjs');
const r = Mock.Random;

//登录
Mock.mock(RegExp('http://localhost:8080/a/authorization' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            user:'exile',
            id:'123456789',
            SUYUNSESSION:'1234567890'
        }
    };
});

//退出
Mock.mock(RegExp('http://localhost:8080/a/logout' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{}
    };
});

Mock.mock('http://localhost:8080/materiel/list?page.pageNo=1&page.pageSize=20', 'post',()=>{
    return {
        result:true,
        data:{
            list:'12345678909876543210'.split('').map(item => { 
                    return {
                        model:'L01',
                        id:'123456789',
                        addby:r.cname(),
                        adddate:r.date('YYYY-MM-DD HH:mm')
                    };
                }),
            count:100
        }
    };
});

Mock.mock('http://localhost:8080/materiel/del?id=123456789', 'post',()=>{
    return {
        result:true
    };
});

Mock.mock('http://localhost:8080/a/vehmodel/vehModelBaseInfo/getList', 'post',()=>{
    return {
        result:true,
        data:{
            list:'12345678909876543210'.split('').map(item => { 
                return {
                    id:r.integer(),
                    name:r.cname()
                };
            }),
            count:r.integer(20,50)
        }
    };
});

Mock.mock('http://localhost:8080/a/vehmodel/vehModelBaseInfo/getPage', 'post',()=>{
    return {
        result:true,
        data:{
            list:'12345678909876543210'.split('').map(item => { 
                return {
                    id:r.integer(),
                    name:r.cname(),
                    companyName:r.cname(),
                    busModelType:'003',
                    busType:'004'
                };
            }),
        }
    };
});

Mock.mock(RegExp('http://localhost:8080/a/vehmodel/vehModelPartsScheme/getPage' + ".*"), 'post',()=>{
    return {
        result:true,
        data:'12345678909876543210'.split('').map(item => { 
            return {
                "id": 2,
                "createBy": "1",
                "creatorName": "admin",
                "createDate": "2019-06-19 15:08:00",
                "updateDate": "2019-06-19 15:08:05",
                "status": "0",
                "modelId": "0124c25449fa4c17992f45ba2bb00b88",
                "modelName": "L01",
                "partNo": "01",
                "partName": "部件2",
                "numForVehicle": "10.00",
                "unit": "颗",
                "price": "100.00",
                "officeId": "1"
            };
        }),
    };
});

Mock.mock(RegExp('http://localhost:8080/addMateriel/add' + ".*"), 'post',()=>{
    return {
        result:true
    };
});

Mock.mock(RegExp('http://localhost:8080/delMateriel/del' + ".*"), 'post',()=>{
    return {
        result:true
    };
});

Mock.mock(RegExp('http://localhost:8080/getMaintainSettingList' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            list:'12345678909876543210'.split('').map(item => { 
                    return {
                        model:'L01',
                        id:'123456789',
                        addby:r.cname(),
                        adddate:r.date('YYYY-MM-DD HH:mm')
                    };
                }),
            count:100
        }
    };
});

Mock.mock(RegExp('http://localhost:8080/getMaintainsListByVehicleModel' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            list:'12345'.split('').map(item => { 
                    return {
                        id:'123456789',
                        type:r.integer(1,3),
                        km:r.integer(10,100),
                        time:r.date('YYYY-MM-DD HH:mm'),
                        data:[]
                    };
                }),
            count:100
        }
    };
});

Mock.mock(RegExp('http://localhost:8080/saveMaintainDetail' + ".*"), 'post',()=>{
    return {
        result:true
    };
});

Mock.mock(RegExp('http://localhost:8080/getMaintenanceEntrustmentList' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            list:'12345'.split('').map(item => { 
                    return {
                        id:'123456789',
                        type:r.integer(1,3),
                        km:r.integer(10,100),
                        time:r.date('YYYY-MM-DD HH:mm'),
                        data:[]
                    };
                }),
            count:100
        }
    };
});

//预约列表
Mock.mock(RegExp('http://localhost:8080/a/appointment/sAppointmentApplication/getList' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            list:'123424232425'.split('').map(item => { 
                    return {
                        id:'123456789',
                        reservationNo:'123456789',
                        plateNo:'123456789',
                        vin:'123456789',
                        modelName:'123456789',
                        reservationName:'123456789',
                        contact:'123456789',
                        reservationTime:'123456789',
                        'reservationSite.name':'123456789',
                        problemDesc:'123456789',
                        srcOfBusiness:'123456789',
                        reservationType:'123456789',
                        billStatus:'123456789',
                    };
                }),
            count:100
        }
    };
});

//预约详情
Mock.mock(RegExp('http://localhost:8080/a/appointment/sAppointmentApplication/getById' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            id:'123456789',
            flowId:'123435',           // 申请业务流程ID
            flowStatus:'123435',           // 流转状态
            frontBussinessCode:'123435',           // 前置业务单号
            frontBussinessType:'123435',           // 前置业务类型
            reservationNo:'123435',           // 预约单号
            reservationType:'123435',           // 预约类型(保养/故障维修)
            srcOfBusiness:'123435',           // 预约单来源(电话/公众号/救援单)
            plateNo:'123435',           // 车牌号
            vin:'123435',           // VIN码
            modelName:'123435',           // 车型名称
            reservationName:'123435',           // 预约人
            contact:'123435',           // 联系方式
            reservationTime:'123435',           // 预约时间
            reservationSiteId:'123435',           // 预约地点Id
            maintenanceType:'123435',           // 保养类型(A/B..)
            problemDesc:'123435',           // 问题描述
            billStatus:'123435',           // 业务状态(待确认/确认中/已确认)
            photos:'123435',           // 图片
            eDiagnosticOpinion:'123435',           // 工程师诊断意见
            eDiagnosticDesc:'123435',           // 工程师诊断描述
            creatorName:'123435',           // 创建人账号
            updatorName:'123435',           // 更新人账号
            status:'123435'           // 记录有效性状态
        }
    };
});

Mock.mock(RegExp('http://localhost:8080/a/appointment/sAppointmentApplication/deleteById' + ".*"), 'post',()=>{
    return {
        result:true
    };
});

Mock.mock(RegExp('http://localhost:8080/a/appointment/sAppointmentApplication/save' + ".*"), 'post',()=>{
    return {
        result:true
    };
});

//接车列表
Mock.mock(RegExp('http://localhost:8080/a/pickup/sVehiclePickUp/getPage' + ".*"), 'post',()=>{
    return {
        result:true,
        data:{
            list:'123424232425'.split('').map(item => { 
                    return {
                        id:'123456789',
                        pickUpNo   :r.cname(),  //接车单号
                        vin    :r.cname(),  //VIN码
                        plateNo :r.cname(),  //车牌号
                        modelId :r.cname(),  //车型名称
                        driverName :r.cname(),  //送车司机
                        contact  :r.cname(),  //联系方式
                        entryTime :r.cname(),  //进厂时间
                        pickUpSiteId:r.cname(),  //接车地点
                        drivingMileage:r.cname(),  //行驶里程
                        mainBType   :r.cname(),  //维保项目
                        maintenanceItemType :r.cname(),  //维保类型
                        driverIsWait  :r.cname(),  //司机等待
                        flowStatus :r.cname(),  //状态
                    };
                }),
            count:100
        }
    };
});

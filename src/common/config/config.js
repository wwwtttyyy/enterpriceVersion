export default {
  logo: 'ADMIN',
  navBar: {
    active: '0',
    list: [
      {
        name: '个人承诺',
        path: '/titleAppraisal/edit/pages/promise',
        show: true
      },
      {
        name: '1.基本信息',
        path: '/titleAppraisal/edit/pages/basicInfo',
        show: false
      },
      {
        name: '2.学历情况',
        path: '/titleAppraisal/edit/pages/education',
        show: false
      },
      {
        name: '3.主要经历',
        path: '/titleAppraisal/edit/pages/mainExperience',
        show: false
      },
      {
        name: '4.人才引进相关材料',
        path: '/titleAppraisal/edit/pages/talentMaterials',
        show: false
      },
      {
        name: '5.论文、著作',
        path: '/titleAppraisal/edit/pages/academic',
        show: false},
      {
        name: '6.业绩成果',
        path: '/titleAppraisal/edit/pages/performanceResult',
        show: false },
      {
        name: '7.业绩奖项',
        path: '/titleAppraisal/edit/pages/performanceReward',
        show: false},
      {
        name: '8.业绩专利',
        path: '/titleAppraisal/edit/pages/performancePatent',
        show: false },
      {
        name: '9.从业或执业（职业）资格',
        path: '/titleAppraisal/edit/pages/qualification',
        show: false },
      {
        name: '10.国（境）外工作或研究材料',
        path: '/titleAppraisal/edit/pages/researchMaterial',
        show: false },
      {
        name: '11.工作总结',
        path: '/titleAppraisal/edit/pages/jobSummary',
        show: false },
      {
        name: '12.其他材料',
        path: '/titleAppraisal/edit/pages/otherMaterial',
        show: false },
      {
        name: '审核报送',
        path: '/titleAppraisal/edit/pages/submit',
        show: false }
    ]
  },
  organization: {
    list: [
      {
        index: 0,
        name: '单位信息',
        path: '/organization/unitInfo'
      },
      {
        index: 1,
        name: '分公司信息',
        path: '/organization/branchInfo'
      },
      {
        index: 2,
        name: '签章管理',
        path: ''
      },
      {
        index: 3,
        name: '工作账号',
        path: '/organization/workAccount'
      },
      {
        index: 4,
        name: '改名记录',
        path: ''
      },
      {
        index: 5,
        name: '签章修改日志',
        path: ''
      }
    ]
  }
}

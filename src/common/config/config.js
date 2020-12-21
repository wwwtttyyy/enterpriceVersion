export default {
  logo: 'ADMIN',
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
  },
  titleApprisal: {
    list: [
      {
        index: 0,
        name: '待办事项',
        children: [
          {
            index: 0,
            name: '职称认定',
            path: '/titleAppraisal/todo/titleIdentified'
          },
          {
            index: 1,
            name: '职称评审',
            path: '/titleAppraisal/todo/titleAppraisal'
          },
          {
            index: 2,
            name: '重新确认',
            path: '/titleAppraisal/todo/confirm'
          },
          {
            index: 3,
            name: '遗失补办',
            path: '/titleAppraisal/todo/lostFor'
          }
        ]
      }
    ]
  },
  unitApproval: {
    list: [
      {
        index: 0,
        name: '个人填写部分',
        children: [
          {
            name: '1.基本信息',
            path: '/unitApproval/user/basicInfo',
            index: 0
          },
          {
            name: '2.学历情况',
            path: '/unitApproval/user/education',
            index: 1
          },
          {
            name: '3.主要经历',
            path: '/unitApproval/user/mainExperience',
            index: 2
          },
          {
            name: '4.人才引进相关材料',
            path: '/unitApproval/user/talentMaterials',
            index: 3
          },
          {
            name: '5.论文、著作',
            path: '/unitApproval/user/academic',
            index: 4
          },
          {
            name: '6.业绩成果',
            path: '/unitApproval/user/performanceResult',
            index: 5
          },
          {
            name: '7.业绩奖项',
            path: '/unitApproval/user/performanceReward',
            index: 6
          },
          {
            name: '8.业绩专利',
            path: '/unitApproval/user/performancePatent',
            index: 7
          },
          {
            name: '9.从业或执业（职业）资格',
            path: '/unitApproval/user/qualification',
            index: 8
          },
          {
            name: '10.国（境）外工作或研究材料',
            path: '/unitApproval/user/researchMaterial',
            index: 9
          },
          {
            name: '11.工作总结',
            path: '/unitApproval/user/jobSummary',
            index: 10
          },
          {
            name: '12.其他材料',
            path: '/unitApproval/user/otherMaterial',
            index: 11
          }
        ]
      },
      {
        index: 1,
        name: '单位填写部分',
        children: [
          {
            index: 0,
            path: '/unitApproval/unit/mainUnit',
            name: '主管单位意见'
          },
          {
            index: 1,
            path: '/unitApproval/unit/basicUnit',
            name: '基层单位考核推荐意见'
          },
          {
            index: 2,
            path: '/unitApproval/unit/score',
            name: '任职期满任职期考核结果'
          },
          {
            index: 3,
            path: '/unitApproval/unit/public',
            name: '公示情况'
          },
          {
            index: 4,
            path: '/unitApproval/unit/reviewTeam',
            name: '单位审议小组审议推荐意见'
          },
          {
            index: 5,
            path: '/unitApproval/unit/expertOpinion',
            name: '专家鉴定意见'
          },
          {
            index: 6,
            path: '/unitApproval/unit/defense',
            name: '答辩情况'
          },
          {
            index: 7,
            path: '/unitApproval/unit/submit',
            name: '审核报送'
          }
        ]
      }
    ]
  }
}

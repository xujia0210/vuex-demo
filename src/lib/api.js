export default {
  serverUrl: 'https://api.tiejin.cn/command/',
  devserverUrl: 'http://10.3.0.11:8080/command/',
  subdevserverUrl: 'http://oms-sandbox.tiejin.cn/command',
  serverDevUrl: 'https://api-sandbox.tiejin.cn/command/',
  downUrl: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer',
  file: '/file/upload/public',
  admin: {
      // 微信授权获取code
      get_auth_path: 'closer_auth.get_auth_path',
      login_with_wechat: 'closer_auth.login_with_wechat',
      closeruser_regist: 'closer_auth.closeruser_regist',
      get_code_by_phone: 'closer_account.get_code_by_phone_v2',
      check: 'closer_account.check',
      check_wechat: 'closer_account.check_wechat',
      info: 'closer_user.info',
      // 用户详情
      user_show: 'closer_user.show',
      // 点赞
      like: 'closer_reply.like',
      // 回复 评论
      add_reply: 'closer_reply.add_reply',
      // 邀请人书
      invite_counts: 'closer_user.invite_counts'
  },
  command: {
      // 贴子详情
      show: 'closer_subject.show',
      // 阅读量统计
      incr_view: 'closer_subject.incr_view',
      // 留言列表
      comments: 'closer_reply.comments',
      // 获取video播放密钥
      videos: 'ali_vod.accessInfo',
      // 举报
      report: 'closer_report.add',
      // 点赞
      like: 'closer_reply.like',
      // 评论以及回复评论
      add_reply: 'closer_reply.add_reply',
      // 富评论下的子评论
      replys: 'closer_reply.replys',
      // 举报列表
      reportType: 'closer_report.get_report_types'
  },
  community: {
      // 栏目实体
      show: 'closer_community.show',
      // 获取栏目下贴子列表
      community_subject_list_index: 'closer_subject.community_subject_list_index',
      // 订阅/取消订阅
      subscription: 'closer_community.subscription'
  },
  group: {
      show: 'closer_class.show',
      // 正在招募的群组
      recruiting: 'closer_class.recruiting',
      group_subject_list: 'closer_subject.class_subject_list_index',
      share_group: 'closer_share.outer_group'
  },
  activity: {
      // 世界杯活动接口
      add_channel: 'activity_worldcup.add_channel',
      check_guess_result: 'activity_worldcup.check_guess_result',
      get_match_list: 'activity_worldcup.get_match_list',
      get_user_guess_list: 'activity_worldcup.get_user_guess_list',
      get_user_guess_statistic: 'activity_worldcup.get_user_guess_statistic',
      guess_match: 'activity_worldcup.guess_match',
      receive_chance: 'activity_worldcup.receive_chance',
      check_guess_result: 'activity_worldcup.check_guess_result'
  },
  statitics: {
      // 数据统计接口
      view_count: 'closer_promotion_activity.view_count',
      get_adcookie: 'closer_statistics.get_adcookie'
  }
}
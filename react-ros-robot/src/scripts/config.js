const Config = {
  ROSBRIDGE_SERVER_IP: "192.168.8.101",
  ROSBRIDGE_SERVER_PORT: "9090",
  RECONNECTION_TIMER: 3000,
  CMD_VEL_TOPIC: "/cmd_vel",
  POSE_TOPIC: "/amcl_pose",
  ODOM_TOPIC: "/odom",
  MAP_TOPIC: "/map",
  MAP_TOPIC_FOR_MAP_GOAL: "map",
  MAP_META_TOPIC: "/map_metadata",
  MAP_WIDTH: 1100,
  MAP_WEIGHT: 845,
  MOVE_BASE: "/move_base"
};

export default Config;

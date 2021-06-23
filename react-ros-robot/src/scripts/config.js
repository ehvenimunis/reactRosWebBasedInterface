const Config = {
  ROSBRIDGE_SERVER_IP: "192.168.8.101",
  ROSBRIDGE_SERVER_PORT: "9090",
  RECONNECTION_TIMER: 3000,
  CMD_VEL_TOPIC: "/r5/mobile_base_controller/cmd_vel",
  POSE_TOPIC: "/r5/amcl_pose",
  ODOM_TOPIC: "/r5/mobile_base_controller/odom",
  MAP_TOPIC: "/r5/map",
  MAP_TOPIC_FOR_MAP_GOAL: "r5/map",
  MAP_META_TOPIC: "/r5/map_metadata",
  MAP_WIDTH: 750,
  MAP_WEIGHT: 800,
  MOVE_BASE: "/r5/move_base"
};

export default Config;

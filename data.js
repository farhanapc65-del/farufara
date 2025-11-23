var APP_DATA = {
  "scenes": [
    {
      "id": "0-kit",
      "name": "kit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0429477774478606,
        "pitch": 0.1260112025773541,
        "fov": 1.0020851541401234
      },
      "linkHotspots": [
        {
          "yaw": 3.1116905679934312,
          "pitch": 0.22449987863501164,
          "rotation": 10.995574287564278,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.1585503299058466,
          "pitch": 0.19838316138863554,
          "rotation": 4.71238898038469,
          "target": "0-kit"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

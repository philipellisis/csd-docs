---
sidebar_position: 1.2
---

# Steam Calibration

To use the PinOne controller with Steam, all you need to do is set it up as a generic controller using the following steps:

1. Go to Steam settings:

![image](./img/steam1.png)

2. Select Controller, enable generic controllers, and click "begin setup"

![image](./img/steam2.png)

3. In the controller setup, you have a couple of options -- you can use the buttons themselves to walk through the button mapping, and you can use the Configuration tool to manually send input values (Some can be difficult to send, like nudge, so the tool allows you to send a nudge command). If you want to use a pre-configured 9 button setup, you can simply paste the command below:

```
030047518f0e00000692000000000000,Clev Soft PinOne,crc:5147,platform:Windows,a:b6,b:b4,x:b5,y:b7,dpleft:b24,dpright:b25,dpup:b26,dpdown:b27,leftx:a0,lefty:~a1,righty:a2,leftshoulder:b2,lefttrigger:b3,rightshoulder:b0,righttrigger:b1,start:b8,steam:1,
```
![image](./img/steam3.png)

4. Once the configuration above is loaded into steam, you can set the controller as shown below and all the keys should work.

![image](./img/steam4.png)
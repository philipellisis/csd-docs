---
sidebar_position: 4
---

# Sample DOFLinx ini

Below is a sample ini file that will work to configure the PinOne Mini, and with minor changes can also accommodate a Builders kit.

```
DEBUG=0
####
# The config file for DOFLinx with most common settings as a sample
#
# Note - this works with LEDWiz, PacLed64, Pinscape, Ultimate I/O and Sainsmart (FTDI devices)
# Edit this file as you see fit, lines that start with a hash (#) or are blank are not processed.  This blurb and comments can be cut out if you want.
#
# Output devices outputs are entered in the format of
# device (D) and output number (#) in the format D##, so controller device 1 and output 3 is "103" without the quotes, controller board 2 output 23 is "223" without quotes
#
# The keyboard hex code for the key that is used for each flipper from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
#
####

# Point to your directoutputconfig.ini file.  Your file may have a number, ie directoutputconfig20.ini
# You can point to any of your directoutputconfig.ini files, but only one
# Keep this as the first pararameter to process in your INI file.  The order past ths point is not relevant

DIRECTOUTPUTCONFIG=C:\DirectOutput\directoutputconfig11.ini

# The location of the .FX3 game specific files included with the DOFLinx release package
# Ensure your path has a \ on the end of it

PATH_FX3=C:\DirectOutput\FX3\

# The path to where you keep all of the .directb2s files that you've downloaded for use with FX3
# Ensure your path has a \ on the end of it

PATH_FX3_B2S=C:\DirectOutput\DOFLinx_FX3_B2S\

# This is the folder where B2SServer.exe can be found on your system

PATH_B2S_SERVER=C:\Visual Pinball\Tables

# The list of processes that can activate DOFLinx, in this case, Pinball FX2, Pinball FX3 and Future Pinball

PROCESSES=Pinball FX2,Pinball FX3,Future Pinball

# An over-ride to the default setting given this is just being used with Pinball FX3, not FX2, FP or other systems that may require the default delay

PROCESS_TO_ACTIVE_TIME=1

# Set the key code for the keys being used as Left and Right flippers
# Used for the default fll back if a full link cannot be established
# Left Shift = A0, Right Shift = A1

L_FLIPPER_KEY=A0
R_FLIPPER_KEY=A1

# Just in case things go wrong (ie no keyup signal is detected, flipper held down for a long time), what is the maximum time a flipper solenoid / contactor can be in in milliseconds
MAX_FLIPPER_ON=5000

# Use random colour order for the RGB undercabinet lighting
RGB_STYLE=RANDOM

# Use the flipper key press to to cause undercabinet lighting to change
RGB_TRIGGER=FLIPPER

# The minimum time for change between flipper flips, 1000mS or 1 second
RGB_MIN_TIME=1000


# Turn on the attempt to make a full connection to Future Pinball when it is detected as running
FP_ATTEMPT_LINK=1
FP_LINK_WAIT_TIME=60000

# The device / port for the left and right flippers, set to output device 1, left flipper solenoid on port 1 and right flipper solenoid on port 2
#L_FLIPPER_OUTPUT=101
#R_FLIPPER_OUTPUT=102
#LINK_LF=101,50,10000,255
#LINK_RF=102,50,10000,255

# The other 8 solenoid of a 10 solenoid setup using ports 4 to 11 inclusive
# 102 is for solenoid 2, 101 is for solenoid 1. Change to other other solenoids in your system
# if you have more than 2. 
LINK_LS=102,50,500,255
LINK_RS=102,50,500,255
LINK_BL=102,50,500,255
LINK_BC=102,50,500,255
LINK_BR=101,50,500,255
LINK_ML=101,50,500,255
LINK_MC=101,50,500,255
LINK_MR=101,50,500,255


# Ports for the shaker
#LINK_SH=112,1000,5000,255

#Uncomment these lines if you have a lightbar
#LINK_FLOL=134
#LINK_FLIL=137
#LINK_FLCN=140
#LINK_FLIR=143
#LINK_FLOR=146

#button board
#LINK_SR=149,ON,0,255
LINK_ST=126,MONO
LINK_EB=127,MONO
LINK_EX=128,MONO
LINK_CN=125,MONO
#LINK_LB=128,MONO
LINK_FR=129,MONO

#Other stuff
#LINK_BK=113,ON,0,255
#LINK_GR=114,750,10000,255
#LINK_KN=115,120,500,255
```
---
sidebar_position: 5
---

# PinOne In Arduino

## PinOne Source Code

All of the PinOne source code can be found in [GitHub](https://github.com/philipellisis/arduino-virtual-pinball-board)

## Running in Arduino

You can configure Arduino to build and deploy the source code for the PinOne, and you can even use it as a standard Arduino board and run any kind of software you want on it!

### Installation Instructions

To add board support, start Arduino and open the Preferences window (**File** > **Preferences**). Now copy and paste the following URL into the 'Additional Boards Manager URLs' input field:

	https://raw.githubusercontent.com/philipellisis/Arduino_Boards/main/IDE_Board_Manager/package_clevsoft_index.json


If there is already an URL from another manufacturer in that field, click the button at the right end of the field. This will open an editing window allowing you to paste the above URL onto a new line.

### ClevSoft Installation Instructions

Open the Boards Manager window by selecting **Tools** > **Board**, scroll to the top of the board list, and select **Boards Manager**.


If you type "clevsoft" (without quotes) into the "filter your search" field, you will see options to install clevsoft's AVR board files. Click in the desired box, and click the "Install" button that appears. Once installed, the boards will appear at the bottom of the board list.
---
sidebar_position: 5
---

# PinOne Ultra In Arduino

## PinOne Ultra Source Code

The PinOne source code can be found in [GitHub](https://github.com/philipellisis/PinOne)

## Building in the Arduino IDE

The PinOne Ultra is an ESP32-S3 board, so it is built with the standard Espressif ESP32 board package rather than the ClevSoft AVR board files used by the original PinOne.

### Board Settings

- **Board**: ESP32S3 Dev Module (or ESP32-S3-USB-OTG)
- **USB Mode**: USB-OTG (TinyUSB)
- **USB CDC On Boot**: Enabled
- **Partition Scheme**: Default 4MB with spiffs
- **PSRAM**: Disabled (unless your module has PSRAM)

### Board Package

Install **esp32 by Espressif** version **3.3.6** from the Arduino IDE Boards Manager. Do not use version 3.3.7, it has a BLE compatibility regression.

### Required Libraries

Install these using the Arduino Library Manager:

- Adafruit PWM Servo Driver Library (for the PCA9685 expansion boards)
- Adafruit BusIO
- NimBLE-Arduino version 2.3.7 (for Bluetooth LE)

### Building with arduino-cli

If you prefer the command line, install [arduino-cli](https://arduino.github.io/arduino-cli/) and use the FQBN `esp32:esp32:esp32s3usbotg`:

```powershell
arduino-cli config init
arduino-cli config set board_manager.additional_urls https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
arduino-cli core update-index
arduino-cli core install esp32:esp32@3.3.6
arduino-cli lib install "Adafruit PWM Servo Driver Library" "Adafruit BusIO" "NimBLE-Arduino@2.3.7"
arduino-cli compile --fqbn esp32:esp32:esp32s3usbotg -u -p COM5 .
```

## Hardware Summary

| Component | Interface | Notes |
|---|---|---|
| 74HC165 shift registers x3 | GPIO 4 (data), 5 (clock), 6 (latch) | 24 button inputs |
| Plunger | GPIO 7 | Analog, 12-bit, read in millivolts |
| I2C | GPIO 8 (SDA), GPIO 9 (SCL) | PCA9685 boards and accelerometer |
| Direct outputs 1-15 | GPIO 40, 38, 39, 14, 15, 48, 13, 18, 12, 11, 47, 21, 45, 42, 10 | 1 kHz PWM |
| PCA9685 boards | I2C 0x40, 0x41, 0x42 | Outputs 16-31, 32-47 and 48-63 |
| QMI8658 accelerometer | I2C 0x6B or 0x6A | Detected at boot |
| USB | GPIO 19 / 20 | Native USB |

Output 13 uses GPIO 45, which is a strapping pin. Make sure the load connected to it does not pull the pin high during reset.


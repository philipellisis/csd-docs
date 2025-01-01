---
sidebar_position: 4
---

# Troubleshooting

### No backbox sound in some VPX games

I have found that sometimes depending on the soundcard or driver, that all the sound is sent to the center channel speaker (but there isn't a center channel speaker in SSF!) The fix for this issue is quite simple -- just download and install [equalizer apo](https://equalizerapo.com/) 

This also gives you the ability to adjust the sound level of SSF sounds vs backbox sounds, which I've found to be out of balance in most cases as the SSF sounds are usually lower than the backbox sounds. One of the easiest ways to do this is simply edit the `C:\Program Files\EqualizerAPO\config\config.txt` as follows:

```
#Pre amp and EQ for all speakers
Preamp: -12 dB
GraphicEQ: 25 0; 40 0; 63 0; 100 0; 160 0; 250 0; 400 0; 630 0; 1000 0; 1600 0; 2500 0; 4000 0; 6300 0; 10000 0; 16000 0

#Pre amp and EQ for backbox speakers
Channel: R L
Preamp: -3 dB
GraphicEQ: 25 0; 40 0; 63 0; 100 0; 160 0; 250 0; 400 0; 630 0; 1000 0; 1600 0; 2500 0; 4000 0; 6300 0; 10000 0; 16000 0

#Pre amp for SSF speakers
Channel: RL RR SL SR
Preamp: +12 dB
GraphicEQ: 25 6; 40 6; 63 6; 100 0; 160 0; 250 0; 400 0; 630 0; 1000 0; 1600 0; 2500 0; 4000 0; 6300 0; 10000 0; 16000 0
```

If you still don't have backbox sound, there is an additional line you can add to the configuration file that redirects center channel speaker sound to the left and right speakers:

```
Copy: L=0.5*L+0.5*C R=0.5*R+0.5*C
```

You can adjust the 0.5 to a higher number if you need more sound going to the speakers.
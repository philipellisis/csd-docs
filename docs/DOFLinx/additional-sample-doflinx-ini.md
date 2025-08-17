---
sidebar_position: 4
---

# Sample DOFLinx ini

Below is a sample ini file that will work to configure the PinOne Mini, and with minor changes can also accommodate a Builders kit.

```
DEBUG=1
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

COLOUR_FILE=C:\DirectOutput\x64\Config\directoutputconfig30.ini
DIRECTOUTPUTGLOBAL=C:\DirectOutput\x64\Config\GlobalConfig_B2SServer.xml
PATH_B2S_SERVER=C:\VP\
SSF_SOUND_PATH=C:\DirectOutput\x64\Sounds
SSF_DEVICE=3
SSF_ENABLED=1
PROCESS_TO_ACTIVE_TIME=1000


# The location of the .FX3 game specific files included with the DOFLinx release package
# Ensure your path has a \ on the end of it

PATH_FX3=C:\DirectOutput\x64\FX3_PUPlayer\
PATH_FX=C:\DirectOutput\x64\FX

# The path to where you keep all of the .directb2s files that you've downloaded for use with FX3
# Ensure your path has a \ on the end of it

PATH_FX3_B2S=C:\vPinball\PinUPSystem\POPMedia\Pinball FX3\BackGlass
PATH_FX_B2S=C:\DirectOutput\x64\B2S

# This is the folder where B2SServer.exe can be found on your system

# PATH_B2S_SERVER=

# The list of processes that can activate DOFLinx, in this case, Pinball FX2, Pinball FX3 and Future Pinball

PROCESSES=PinballFX-Win64-Shipping,Pinball FX2,Pinball FX3,Future Pinball

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

#output for RGB Flipper lights
RGB_OUTPUT=1016

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

######## GAME COLOURS ########
 
#GAME_COLOUR=AlienIsolationPinball,Medium_Blue,Lime,Dodger_Blue,Lime_Green
#GAME_COLOUR=AlienvsPredatorPinball,Medium_Blue,Lime_Green,Dodger_Blue,Yellow_Green
#GAME_COLOUR=AliensPinball,Medium_Blue,Dark_Golden_Rod,Dodger_Blue
#GAME_COLOUR=AmericanDadPinball,Medium_Blue,Lime_Green,Dodger_Blue,Yellow_Green
#GAME_COLOUR=ArcherPinball,Medium_Blue,Yellow,Dodger_Blue,Blue_Violet
#GAME_COLOUR=Biolab,Dark_Red,Lime,Blue,Cyan,Blue_Violet,Yellow
#GAME_COLOUR=Blade,Blue,Blue_Violet,Salmon
#GAME_COLOUR=BobaFett,Lime,Golden_Rod,Blue_Violet
#GAME_COLOUR=BobsBurgersPinball,Medium_Blue,Lime_Green,Dark_Red,Dodger_Blue,Yellow_Green
#GAME_COLOUR=CaptainAmerica,Blue,Dark_Red,Dodger_Blue,Gold
#GAME_COLOUR=CastleStorm,Blue,Gold,Lime,Dodger_Blue,Orange,Lime_Green
#GAME_COLOUR=CivilWar,Blue,Dark_Red,Dodger_Blue,Light_Salmon
#GAME_COLOUR=Deadpool,Dark_Red,Blue,Medium_slate_blue,Dodger_Blue
#GAME_COLOUR=DoomPinball,Yellow,Silver,Gray,Dark_Orange,Dim_Gray,Orange_Red,Peru,Crimson
#GAME_COLOUR=DoctorStrange,Dark_Red,Blue,Gold,Lime_Green,Dark_Violet,Orange,Dodger_Blue,Lime,Medium_Slate_Blue
#GAME_COLOUR=EarthDefense,Dark_Red,Blue,Gold,Dark_Violet,Orange,Dodger_Blue,Lime
#GAME_COLOUR=ElDorado,Orange,Lime_Green,Yellow,Coral,Lime,Yellow_Green,Cyan
#GAME_COLOUR=EpicQuest,Lime_Green,Dodger_Blue,Yellow_Green,Cyan
#GAME_COLOUR=Excalibur,Dark_Red,Blue,Lime,Dodger_Blue,Cyan
#GAME_COLOUR=FalloutPinball,Crimson,White,Red,Brown,Light_Steel_Blue,Slate_Blue
#GAME_COLOUR=FamilyGuyPinball,Dodger_Blue,Lime_Green,Salmon,Dark_Violet,Yellow_Green
#GAME_COLOUR=FantasticFour,Blue,Yellow,Dodger_Blue,Orange_Red
#GAME_COLOUR=FearItself,Dark_Red,Blue,Yellow,Lime,Dark_Violet,Orange
#GAME_COLOUR=GhostRider,Dodger_Blue,White,Yellow,Light_Salmon,Orange_Red
#GAME_COLOUR=GuardiansoftheGalaxy,Dodger_Blue,Orange,Medium_Purple
#GAME_COLOUR=IRONMAN,Blue,Dark_Red,Dodger_Blue,Gold
#GAME_COLOUR=Mars,Blue,Yellow,Deep_sky_blue,Gold
#GAME_COLOUR=MarvelsAntMan,Medium_Blue,Dark_Red,Dodger_Blue
#GAME_COLOUR=MarvelsAvengersAgeofUltron,Dark_Red,Dodger_Blue,Lime_Green,Light_Salmon,Cyan
#GAME_COLOUR=MarvelsTheAvengers,Blue,Dark_Red,Dodger_Blue,Gold
#GAME_COLOUR=MarvelsWomenofPowerAForce,Red,Lime,Gold,Slate_Blue,Tomato,Silver,Dark_Orchid,Spring_Green
#GAME_COLOUR=MarvelsWomenofPowerChampions,Dodger_Blue,Yellow,Red,Gray,Golden_Rod,Crimson,Orange
#GAME_COLOUR=MoonKnight,Dodger_Blue,Blue,Cyan,Royal_Blue
#GAME_COLOUR=MsSplosionMan,Dodger_Blue,Pink,Medium_Blue,Purple,Royal_Blue
#GAME_COLOUR=Paranormal,Lime_Green,Dodger_Blue,Yellow_Green
#GAME_COLOUR=Pasha,Dark_Violet,Golden_Rod,Dodger_Blue
#GAME_COLOUR=PlantsVSZombies,Lime_Green,Yellow_Green,Dodger_Blue
#GAME_COLOUR=Portal,Dodger_Blue,Yellow_Green,Medium_Blue,Yellow
#GAME_COLOUR=Rome,Dark_Red,Gold,Dodger_Blue,Light_Salmon,Yellow_Green,Orange
#GAME_COLOUR=SecretsoftheDeep,Blue,Yellow,Dodger_Blue
#GAME_COLOUR=Shaman,Dark_Red,Blue,Gold,Dark_Violet,Orange,Dodger_Blue,Lime
#GAME_COLOUR=SorcerersLair,Blue,Blue_Violet,Dodger_Blue,Slate_Blue
#GAME_COLOUR=SouthParkButtersVeryOwnPinballGame,Dark_Red,Blue,Gold,Dark_Violet,Orange,Dodger_Blue,Lime_Green
#GAME_COLOUR=SouthParkSuperSweetPinball,Dark_Red,Lime,Blue,Gold,Dark_Violet,Orange,Dodger_Blue,Lime_Green,Yellow_Green
#GAME_COLOUR=SpiderMan,Dark_Red,Lime,Blue,Gold,Dark_Violet,Orange
#GAME_COLOUR=STARWARSDARTHVADER,Light_sky_blue,Dark_Red,Cyan
#GAME_COLOUR=StarWarsEpisodeVTheEmpireStrikesBack,Medium_Blue,Yellow,Dark_Red,Dodger_Blue
#GAME_COLOUR=StarWarsEpisodeVIReturnoftheJedi,Slate_Blue,Golden_Rod,Medium_Blue,Lime_Green,Dodger_Blue,Yellow
#GAME_COLOUR=StarWarsPinballDroids,Medium_Blue,Yellow,Orange,Navy,Gold,Orange_Red
#GAME_COLOUR=StarWarsPinballEpisodeIVANewHope,Cyan,Golden_Rod,Dodger_Blue,Yellow
#GAME_COLOUR=StarWarsPinballHanSolo,Dodger_Blue,Royal_Blue,Antique_White
#GAME_COLOUR=StarWarsPinballMastersoftheForce,Medium_Blue,Salmon,Dodger_Blue,Purple,Cyan,Dark_Red
#GAME_COLOUR=StarWarsPinballMightoftheFirstOrder,Light_sky_blue,Dodger_Blue,Dark_Red,Cyan
#GAME_COLOUR=StarWarsPinballStarWarsRebels,Medium_Blue,Yellow,Royal_Blue,Orange_Red,Purple,Lime_Green
#GAME_COLOUR=StarWarsPinballTheForceAwakens,Dark_Red,Medium_Blue,Blue_Violet
#GAME_COLOUR=StarWarsPinballRogueOne,Gray,Silver,Light_Sky_Blue,Teal,Beige,Bisque,Aqua_Marine,Slate_Gray,Dark_Orange
#GAME_COLOUR=StarWarsStarfighterAssault,Medium_Blue,Dodger_Blue,Dark_Red
#GAME_COLOUR=StarWarsTheCloneWars,Dark_Red,Pink,Medium_Blue,Medium_Turquoise,Lime,Lime_Green
#GAME_COLOUR=SuperLeagueASRoma,Lime_Green,Orange,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueZenStudiosFC,Lime_Green,Orange,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueArsenalFC,Lime_Green,Orange,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueLiverpoolFC,Lime_Green,Orange,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueJuventus,Lime_Green,Orange,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueACMilan,Lime_Green,Orange,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueRealMadridCF,Lime_Green,Medium_Blue,Lime,Yellow,Red
#GAME_COLOUR=SuperLeagueFCBarcelona,Slate_Blue,Lime_Green,Yellow,Blue_Violet,Lime,Red
#GAME_COLOUR=Tesla,Lime_Green,Yellow_Green,Dodger_Blue,Golden_Rod
#GAME_COLOUR=TheElderScrollsVSkyrimPinball,Light_Slate_Gray,Gold,Golden_Rod,Dark_Sea_Green,Peru,Tan
#GAME_COLOUR=TheInfinity Gauntlet,Dark_Red,Blue,Gold,Dark_Violet,Orange,Dodger_Blue,Lime
#GAME_COLOUR=TheWalkingDead,Lime_Green,Royal_Blue,Yellow_Green
#GAME_COLOUR=Thor,Dark_Red,Blue,Gold,Dark_Violet,Orange,Dodger_Blue,Lime
#GAME_COLOUR=V12,Dark_Red,Blue,Gold,Dark_Violet,Orange,Dodger_Blue
#GAME_COLOUR=Venom,Dark_Red,Blue,Dark_Violet,Dodger_Blue
#GAME_COLOUR=WildWestRampage,Yellow_Green,Dodger_Blue,Royal_Blue
#GAME_COLOUR=Wolverine,Dark_Red,Medium_Blue,Yellow,Dark_Violet
#GAME_COLOUR=WorldWarHulk,Lime_Green,Yellow_Green,Dodger_Blue,Lime,Yellow
#GAME_COLOUR=XMen,Blue,Blue_Violet,Gold,Dodger_Blue,Slate_Blue,Orange
#GAME_COLOUR=ET,Yellow,Amber,Sky_blue,Sienna,Aqua_marine,Slate_gray,Dark_olive_green
#GAME_COLOUR=BacktotheFuture,Light_steel_blue,White,Crimson,Gray,Teal,Yellow,Dodger_blue
#GAME_COLOUR=Jaws,Dark_turquoise,Gray,White,Salmon,Light_coral,Tan,Papaya_whip,Peru
#GAME_COLOUR=SonofZeus,Dark_orange,Silver,Dark_salmon,Amber,Sienna,Light_steel_blue,Firebrick
#GAME_COLOUR=AdventureLand,Red,Cyan,Yellow,White,Medium_orchid,Aqua,Dark_turquoise,Medium_purple
#GAME_COLOUR=JurassicPark,Lawn_green,Amber,Yellow,Light_slate_gray,Cadet_blue,Black,Rosy_brown,Light_steel_blue,Medium_sea_green,Silver
#GAME_COLOUR=JurassicWorld,Light_steel_blue,Silver,Tan,Forest_green,Gray,Cadet_blue,Yellow_green,Teal,Bisque
#GAME_COLOUR=JurassicMayhem,Sandy_brown,Forest_green,Dark_green,Dark_olive_green,Dark_khaki,Peru,Tan,Navajo_white,Beige,Dark_golden_rod,Corn_silk
#GAME_COLOUR=StarWarsLastJedi,Gold,Orange_Red,Aqua,Coral,Dark_Khaki,Light_Steel_Blue,Yellow_Green,Steel_Blue
#GAME_COLOUR=StarWarsAhchToIsland,Peru,Tan,Light_Slate_Gray,Light_Golden_Rod,Turquoise,Deep_Sky_Blue,Spring_Green,Steel_Blue
```
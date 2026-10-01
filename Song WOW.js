// tempo: 
setTempo(100);
////////////////////////////////////////////////////////////////////////////LISTS///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////00000000000000000000//11111111111111111111//2222222222222222//3333333333333333//4444444444444444444/5555555555555555555555555555///6666666666666666///77777777777777777777777////888888888888888888888888888///9999999999999999999999999///10101010101010101010101010101
var Instruments = [AK_UNDOG_PERC_DRUMS,AK_UNDOG_SNARE_RIM,AK_UNDOG_PAD_1,AK_UNDOG_BASS_1,AK_UNDOG_PIANO_3,DUBSTEP_DRUMLOOP_MAIN_001,AK_UNDOG_STRINGS,AK_UNDOG_ACOUSTIC_GUITAR_1,DUBSTEP_DRUMLOOP_MAIN_002,DUBSTEP_DRUMLOOP_MAIN_004,DUBSTEP_DRUMLOOP_MAIN_006];
/////////////////////////////////////////////////////////////////////////////////////////////////////
var GuInstruments = [YG_RNB_FUNK_GUITAR_3,YG_RNB_FUNK_GUITAR_2,YG_RNB_FUNK_GUITAR_5,YG_RNB_FUNK_GUITAR_4,YG_RNB_FUNK_GUITAR_6,YG_NEW_HIP_HOP_GUITAR_LICK_1]
///////////////000000000000000000000000000000000000000//111111111111111111111111111111111111111/2222222222222222222222222222222222222//33333333333333333333333333333333333333//
var padSlices =[createAudioSlice(Instruments[2],1.5,2),createAudioSlice(Instruments[2],2.7,3.2),createAudioSlice(Instruments[2],3.5,4),createAudioSlice(Instruments[2],4.5,5)];
///////////////000000000000000000000000000000000000000//111111111111111111111111111111111111111//
var bassSlices= [createAudioSlice(Instruments[3],1,3.5),createAudioSlice(Instruments[3],4,4.5),createAudioSlice(Instruments[3],4.5,5)];
///////////////00000000000000000000000000000000000000/11111111111111111111111111111111111111/2222222222222222222222222222222222222/333333333333333333333333333333333333333333
var piaSlices= [createAudioSlice(Instruments[4],1,2),createAudioSlice(Instruments[4],2,2.5),createAudioSlice(Instruments[4],2.5,3),createAudioSlice(Instruments[4],2.5,2.75)];
//////////////////
var DubSlices=[createAudioSlice(Instruments[5],1,1.5)];
/////////////0000000000000000000//11111111111111111//22222222222222222//
var Dbeats = ["0+--0+--0+--0+--","0+++++++++++++--","0++++++++++++++-",];
/////////////000000000000000000//11111111111111111//222222222222222222//
var Pbeats= ["0+-0+-0+-0+-0+0+","0+--0+--0+--0+--","0+--0+--0+0+0000"];
////////////////////////////////////////////////////////////////////////
var Snarebeats=[makeBeat(Instruments[1],2,5.575,"0+++++++"),];
var piaBeats=["0+++--0+++-0+-0+-","0++-0++-0++++++++++","0++++++++++++","0++-0++-0++-0++-"];
/////////////////Actual Song coding/////////////////////////////////////
//////////////////////////////////////////////Drum Beat////////////////////////////////////////////////////////////////////////////
makeBeat(Instruments[0],1,1,Dbeats[0]);
for(var i=0;i<2;i++){
    makeBeat(Instruments[0],1,2+(i*8),Dbeats[1]+Dbeats[2]+Dbeats[1]+Dbeats[1]+Dbeats[1]+Dbeats[2]+Dbeats[1]+Dbeats[0]);
}
for(var i=0;i<3;i++){
    makeBeat(Instruments[0],1,30+(i*8),Dbeats[1]+Dbeats[2]+Dbeats[1]+Dbeats[1]+Dbeats[1]+Dbeats[2]+Dbeats[1]+Dbeats[0]);
}
/////////////////////////////////////////////Pad Track//////////////////////////////////////////////////////////////////////////////////////////////////
AllPadSlices(6);
AllPadSlices(10);
AllPadSlices(14)
AllPadSlices(18);
AllPadSlices(30);
AllPadSlices(46);
AllPadSlices(50);
///////////////////////////////////////////////////////////////////////////////Bass Track/////////////////////////////////////////////////////////////////////
AllBassSlices(6);
AllBassSlices(10);
AllBassSlices(14);
AllBassSlices(18);
AllBassSlices(26);
AllBassSlices(30);
AllBassSlices(34);
AllBassSlices(38);
AllBassSlices(42);
AllBassSlices(46);
/////////////////////////////////////////////////////////////////Piano Track////////////////////////////////////////////////////////////////////////////////////

AllPiaSlices(10);
AllPiaSlices(14);
AllPiaSlices(18);
AllPiaSlices(22);
AllPiaSlices(26);
AllPiaSlices(30);
AllPiaSlices(34);
AllPiaSlices(38);
AllPiaSlices(42);
AllPiaSlices(46);
AllPiaSlices(50);
//////////////////////////////////////////////////////////////////Dub Drum Track///////////////////////////////////////////////////////////////////////////////
AllDubSlices(14);
AllDubSlices(18);
AllDubSlices(30);
AllDubSlices(34);
AllDubSlices(38);
AllDubSlices(42);
//////////////////////////////////////////////////////////Functions/////////////////////////////////////////////////////////////////
//is all of the pad slices together sort of like a chorus.
function AllPadSlices(start){
makeBeat(padSlices[0],3,start,Pbeats[0]);
makeBeat(padSlices[1],3,start+1,Pbeats[0]);
makeBeat(padSlices[2],3,start+2,Pbeats[0]);
makeBeat(padSlices[3],3,start+3,Pbeats[2]);
}
//All Bass Audio Slices together, very Similar to All pad slices
function AllBassSlices(start){
fitMedia(bassSlices[0],4,start,start+1);
fitMedia(bassSlices[1],4,start+1,start+1.4);
fitMedia(bassSlices[2],4,start+1.5,start+2);
fitMedia(bassSlices[0],4,start+2,start+3);
fitMedia(bassSlices[2],4,start+3.5,start+4);
}
function AllPiaSlices(start){
makeBeat(piaSlices[0],5,start,piaBeats[0])
makeBeat(piaSlices[1],5,start+1,piaBeats[0])
makeBeat(piaSlices[2],5,start+2,piaBeats[0])
makeBeat(piaSlices[2],5,start+3,piaBeats[1])
}
function AllDubSlices(start){
makeBeat(Instruments[10],6,start,"0+++++++++++++++++++++++++++++++++");
makeBeat(Instruments[10],6,start+2,"0++++++++++++-")
makeBeat(Instruments[10],6,start+3,"0+++++++0+++++++-")

}
function AcousticSlices(start){
    makeBeat(Instruments[7],8,start,"0+++++++++++++++++++++++++++++++-")
    makeBeat(Instruments[7],8,start+2,"0+++++++++++++++--------")
    var guiRep =createAudioSlice(Instruments[7],2,2.5)
    makeBeat(guiRep,8,start+3,"0+++++--0+++++--")
}
//////////////////////////////////////////////General ungrouped coding////////////////////////////////////////////////////////////////////////////////////////
fitMedia(bassSlices[2],4,25.5,26);
for(var i=0;i<3;i++){
    makeBeat(Instruments[5],6,26+i,"0+++++++0+++++++-")
}
makeBeat(Instruments[6],7,18,"0+++++++++++++++++++++++++++------")
makeBeat(Instruments[6],7,20,"0+++++++++++++++++++--------------")

setEffect(8,PAN,LEFT_RIGHT,-50);
makeBeat(GuInstruments[0],8,38,"0+++++++++++++++++++++");
setEffect(8,PAN,LEFT_RIGHT,50);
makeBeat(GuInstruments[1],8,40,"0+++++++++++++++++++++");
setEffect(8,PAN,LEFT_RIGHT,0);
makeBeat(GuInstruments[2],8,42,"0+++++++++++++++++++++");
var x= createAudioSlice(GuInstruments[3],1,2);
var y= createAudioSlice(GuInstruments[3],2,2.5);

makeBeat(x,8,44,"0+++++++++++++++++++++");
setEffect(8,PAN,LEFT_RIGHT,50);
makeBeat(x,8,45,"0+++++++-----------");
makeBeat(y,8,45.5,"0++++++++++++++++");
makeBeat(GuInstruments[0],8,46,"0+++++++++++++++++++++");
makeBeat(GuInstruments[1],8,48,"0+++++++++++++++++++++");
makeBeat(GuInstruments[2],8,50,"0+++++++++++++++++++++");
makeBeat(GuInstruments[4],8,52,"0+++++++++++++++++++++");
/////////////////////////////////////////////////////////EFfects///////////////////////////////////////////////////////////////////////////////
setEffect(7, REVERB, REVERB_DAMPFREQ, 2000)
setEffect(7,DELAY,DELAY_TIME,100)
setEffect(7,VOLUME,GAIN,-15)

setEffect(4,VOLUME,GAIN,6);

//setEffect(5,VOLUME,GAIN,-6.9)
setEffect(5,CHORUS,CHORUS_LENGTH,20)

setEffect(6,VOLUME,GAIN,-7.5)
setEffect(6,VOLUME,GAIN,-5,14,-10,18);
setEffect(6,VOLUME,GAIN,-10,21,5,22);
setEffect(6,VOLUME,GAIN,-7.5,29,-7.5,41)
setEffect(6,VOLUME,GAIN,-10,38,-10,46);

setEffect(8,PITCHSHIFT,PITCHSHIFT_SHIFT,-1);
setEffect(8,VOLUME,GAIN,0);
setEffect(8,PAN,LEFT_RIGHT,-100,38,0,39);
setEffect(8,PAN,LEFT_RIGHT,0,40,0,41)
setEffect(8,PAN,LEFT_RIGHT,50,42,0,43)
setEffect(8,PAN,LEFT_RIGHT,0,44,-100,45);
setEffect(8,PAN,LEFT_RIGHT,-100,46,0,47);
setEffect(8,PAN,LEFT_RIGHT,0,48,0,49)
setEffect(8,PAN,LEFT_RIGHT,50,50,0,51)
setEffect(8,PAN,LEFT_RIGHT,0,52,-100,53);

setEffect(8,DISTORTION,MIX,.33);

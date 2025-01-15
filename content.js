console.log("Jumper extension has started")

if(navigator.requestMIDIAccess){
    navigator.requestMediaKeySystemAccess().then(midiAcquired, midiAcquisitionFailure);
} else {
    console.log("Cannot access MIDI information.")
}

function midiAcquired(midiAccess){
    console.log("acquired Midi Access...")
}

function midiAcquisitionFailure(){
    console.log("Cannot access MIDI information.")
}
import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// Map through the emojipedia array and render Entry components.
//3a. Import the emojipedia constant. 
//3b. Map through the emojipedia array and render Entry components.

function createEntry(emojiTerm) {
  return (
    <Entry
      id={emojiTerm.id}
      key={emojiTerm.id}
      icon={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

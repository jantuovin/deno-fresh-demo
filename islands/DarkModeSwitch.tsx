/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

enum Mode {
  light = "light",
  dark = "dark",
}

export default function DarkModeSwitch() {
  const [mode, setMode] = useState<Mode | undefined>(undefined);

  function handleModeChange(mode: Mode) {
    document.documentElement.setAttribute('data-theme', mode);
    setMode(mode);
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      handleModeChange(Mode.dark);
    } else {
      handleModeChange(Mode.light);
    }
  }, []);

  function getNextMode() {
    return mode === Mode.light ? Mode.dark : Mode.light;
  }

  function handleModeButtonClick() {
    handleModeChange(getNextMode());
  }

  return (
    <section class="dark-mode-switch-container">
      {mode && (
        <button onClick={() => handleModeButtonClick()}>{getNextMode()}</button>
      )}
    </section>
  );
}

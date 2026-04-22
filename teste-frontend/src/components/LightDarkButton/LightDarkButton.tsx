import './style.css';

export function LightDarkButton({context}: any){
  const isDark = context.theme.type === "dark";

  return (
    <div>
      <input 
        type="checkbox" 
        id="theme-checkbox" 
        className="theme-checkbox" 
        onChange={context.toggleTheme}
        checked={isDark}
      />
      <label htmlFor="theme-checkbox" className="theme-label">
        <div className="ball">
          <div className="scars"></div>
        </div>
        <div className="celestial">
          <span className="moon">☀️</span>
          <span className="sun">🌙</span>
        </div>
      </label>
    </div>
  );
};
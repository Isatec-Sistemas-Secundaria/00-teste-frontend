const root = document.documentElement;
const loginForm = document.querySelector(".login-form");
const recoveryForm = document.querySelector(".recovery-form");
const loginMessage = document.querySelector(".login-message");
const recoveryMessage = document.querySelector(".recovery-message");
const title = document.querySelector("#login-title");
const subtitle = document.querySelector("#login-subtitle");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const botInput = document.querySelector("#company");
const submitButton = document.querySelector(".submit-button");
const recoveryEmailInput = document.querySelector("#recovery-email");
const recoveryBotInput = document.querySelector("#recovery-company");
const recoverySubmitButton = document.querySelector(".recovery-submit-button");
const forgotButton = document.querySelector(".forgot-link");
const backButton = document.querySelector(".back-link");
const themeToggle = document.querySelector(".theme-toggle");

const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const params = new URLSearchParams(window.location.search);
const forcedTheme = params.get("theme");
const demoMode = params.get("demo");
const savedTheme = localStorage.getItem("theme");
const initialTheme =
  forcedTheme === "dark" || forcedTheme === "light"
    ? forcedTheme
    : savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
    : systemPrefersDark
      ? "dark"
      : "light";

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro"
  );
  themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

setTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CONTROL_CHAR_PATTERN = /[\u0000-\u001f\u007f]/g;

function normalizeEmail(value) {
  return value.normalize("NFKC").replace(CONTROL_CHAR_PATTERN, "").trim().toLowerCase();
}

function cleanPassword(value) {
  return value.replace(/[\r\n\t]/g, "");
}

function clearFieldState(input) {
  setFieldState(input);
  input.value = "";
}

function setFieldState(input, errorText = "") {
  const field = input.closest(".field");
  const error = field.querySelector(".field-error");

  input.setCustomValidity(errorText);
  input.setAttribute("aria-invalid", errorText ? "true" : "false");
  field.classList.toggle("is-invalid", Boolean(errorText));
  error.textContent = errorText;
}

function validateEmail(input) {
  input.value = normalizeEmail(input.value);

  if (!input.value) {
    setFieldState(input, "Informe seu e-mail.");
    return false;
  }

  if (input.value.length > 254 || !EMAIL_PATTERN.test(input.value)) {
    setFieldState(input, "Use um e-mail válido.");
    return false;
  }

  setFieldState(input);
  return true;
}

function validatePassword() {
  const cleanedPassword = cleanPassword(passwordInput.value);

  if (cleanedPassword !== passwordInput.value) {
    passwordInput.value = cleanedPassword;
  }

  if (!passwordInput.value) {
    setFieldState(passwordInput, "Informe sua senha.");
    return false;
  }

  if (passwordInput.value.length < 8) {
    setFieldState(passwordInput, "A senha precisa ter pelo menos 8 caracteres.");
    return false;
  }

  if (passwordInput.value.length > 128) {
    setFieldState(passwordInput, "A senha excede o limite permitido.");
    return false;
  }

  setFieldState(passwordInput);
  return true;
}

function validateForm() {
  const isEmailValid = validateEmail(emailInput);
  const isPasswordValid = validatePassword();
  return isEmailValid && isPasswordValid && !botInput.value;
}

function validateRecoveryForm() {
  return validateEmail(recoveryEmailInput) && !recoveryBotInput.value;
}

function setActivePanel(panel) {
  const isRecovery = panel === "recovery";

  loginForm.hidden = isRecovery;
  recoveryForm.hidden = !isRecovery;
  loginForm.classList.toggle("is-active", !isRecovery);
  recoveryForm.classList.toggle("is-active", isRecovery);
  title.textContent = isRecovery ? "Recuperar senha" : "Bem-vindo";
  subtitle.textContent = isRecovery
    ? "Informe seu e-mail cadastrado"
    : "Faça login na sua conta";
  loginMessage.textContent = "";
  recoveryMessage.textContent = "";

  if (isRecovery) {
    recoveryEmailInput.value = normalizeEmail(emailInput.value);
    setFieldState(recoveryEmailInput);
    recoveryEmailInput.focus();
    return;
  }

  clearFieldState(recoveryEmailInput);
  emailInput.focus();
}

emailInput.addEventListener("blur", () => validateEmail(emailInput));
recoveryEmailInput.addEventListener("blur", () => validateEmail(recoveryEmailInput));
passwordInput.addEventListener("blur", validatePassword);

emailInput.addEventListener("input", () => {
  if (emailInput.getAttribute("aria-invalid") === "true") {
    validateEmail(emailInput);
  }
});

recoveryEmailInput.addEventListener("input", () => {
  if (recoveryEmailInput.getAttribute("aria-invalid") === "true") {
    validateEmail(recoveryEmailInput);
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.getAttribute("aria-invalid") === "true") {
    validatePassword();
  }
});

forgotButton.addEventListener("click", () => {
  history.replaceState(null, "", "#forgot");
  setActivePanel("recovery");
});

backButton.addEventListener("click", () => {
  history.replaceState(null, "", window.location.pathname + window.location.search);
  setActivePanel("login");
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginMessage.textContent = "";

  if (!validateForm()) {
    loginMessage.textContent = "Revise os dados destacados para continuar.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Entrando...";

  await new Promise((resolve) => {
    setTimeout(resolve, 650);
  });

  loginMessage.textContent = "Login pronto para integração.";
  submitButton.disabled = false;
  submitButton.textContent = "Entrar";
});

recoveryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  recoveryMessage.textContent = "";

  if (!validateRecoveryForm()) {
    recoveryMessage.textContent = "Informe um e-mail válido para continuar.";
    return;
  }

  recoverySubmitButton.disabled = true;
  recoverySubmitButton.textContent = "Enviando...";

  await new Promise((resolve) => {
    setTimeout(resolve, 650);
  });

  recoveryMessage.textContent = "Se o e-mail existir, enviaremos as instruções.";
  recoverySubmitButton.disabled = false;
  recoverySubmitButton.textContent = "Enviar instruções";
});

if (window.location.hash === "#forgot") {
  setActivePanel("recovery");
}

if (demoMode === "hardening") {
  emailInput.value = "email invalido";
  passwordInput.value = "123";
  validateForm();
  loginMessage.textContent = "Exemplo de hardening ativo nos campos.";
}

function caesarCipher (string, shift) {
  return string.replace(/[a-zA-Z]/g, function(c) {
    const base = c < 'a' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0)-base + shift) % 26 + base);
  });
}

function translate() {
  const plaintext = document.getElementById("plaintext");
  const shift = document.getElementById("shift");
  const plaintextValue = plaintext.value;
  const shiftValue = parseInt(shift.value);
  const outputValue = caesarCipher(plaintextValue, shiftValue);
  document.getElementById('output').innerHTML = outputValue;
}

document.getElementById('plaintext').addEventListener('input', translate);
document.getElementById('shift').addEventListener('input', translate);

const spinnerOutput = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

const spinner = function (spinnerOutput) {
  let ms = 100
  for (const spin of spinnerOutput) {
    setTimeout(() => {
      process.stdout.write(spin)
    }, ms);
    ms += 200
  }
}

spinner(spinnerOutput)

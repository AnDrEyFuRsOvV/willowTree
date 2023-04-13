
    // Link to the noUiSlider library: https://refreshless.com/nouislider/
    const rangeSlider = document.getElementById('rangeSlider');

    // Check if the slider exists
    if (rangeSlider) {
        // Create the slider with the following options
        noUiSlider.create(rangeSlider, {
            start: [40, 99999], // Starting values of the slider
            step: 1, // Increment between values
            connect: true, // Connect the two handles of the slider
            range: {
                'min': 40, // Minimum value of the slider
                'max': 9999 // Maximum value of the slider
            }
        });

        // Get the inputs for the slider
        const inputOne = document.getElementById('input-one');
        const inputTwo = document.getElementById('input-two');
        const inputs = [inputOne, inputTwo];

        // Update the input values as the slider changes
        rangeSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        // Function to set the slider values
        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
            rangeSlider.noUiSlider.set(arr)
        };

        // Add event listener to each input to set the slider values as they change
        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            });

        });
    }

    const rangeSlidere = document.getElementById('rangeSlidere');

    if (rangeSlidere) {
        // Create the slider with the following options
        noUiSlider.create(rangeSlidere, {
            start: [40], // Starting value of the slider
            step: 1, // Increment between values
            connect: [true, false],
            range: {
                'min': 0, // Minimum value of the slider
                'max': 400 // Maximum value of the slider
            }
        });
    }

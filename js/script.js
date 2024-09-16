document.getElementById('equation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = '';

     

    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
        errorMessageElement.textContent = 'Veuillez entrer des nombres valides pour a, b et c.';
        return;
    }

    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (aNum === 0) {
        errorMessageElement.textContent = 'La valeur de a ne peut pas être égale à 0.';
        return;
    }
// ______________________________________ CALCUL du Delta ____________________________________________

    const delta = bNum * bNum - 4 * aNum * cNum;

    let result = `Delta (Δ) = ${delta}<br>`;

    if (delta > 0) {
        const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
        const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
        result += `Deux solutions réelles : x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
        const x = -bNum / (2 * aNum);
        result += `Une solution réelle : x = ${x}`;
    } else {
        result += "Pas de solution réelle.";
    }

    document.getElementById('result').innerHTML = result;
});

// Fonction pour simplifier les fractions
function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const gcdValue = gcd(numerator, denominator);
    return `${numerator / gcdValue}/${denominator / gcdValue}`;
}



document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('error-message').textContent = '';
});

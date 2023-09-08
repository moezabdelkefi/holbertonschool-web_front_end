function countPrimeNumbers() {
    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

function measureExecutionTime() {
    const startTime = Date.now();

    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    const endTime = Date.now();
    return endTime - startTime;
}

const totalTime = measureExecutionTime();
console.log(`Total time for 100 executions: ${totalTime} milliseconds`);
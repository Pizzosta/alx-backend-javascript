interface MajorCredits {
    credits: number;
    brand: 'MajorCredits'; // Uniquely identifies the interface
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits'; // Uniquely identifies the interface
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
        credits: totalCredits,
        brand: 'MajorCredits',
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
        credits: totalCredits,
        brand: 'MinorCredits',
    };
}

// Test
const subject1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const subject2: MajorCredits = { credits: 4, brand: 'MajorCredits' };
const majorCreditsSum = sumMajorCredits(subject1, subject2);
console.log("Total Major Credits:", majorCreditsSum.credits);

const subject3: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const subject4: MinorCredits = { credits: 1, brand: 'MinorCredits' };
const minorCreditsSum = sumMinorCredits(subject3, subject4);
console.log("Total Minor Credits:", minorCreditsSum.credits);

export class Question
{
    // Setting the default value in a class should make all fields optional.
    questionText: string = '';
    options: { label: string; correct: boolean }[] = []
    
    constructor(
        questionText: string,
        options: { label: string; correct: boolean }[]
    ) {
        this.questionText = questionText;
        this.options = options;
    }
    
    /**
    * Returns the options as a plain string array.
    *
    * @returns The options as a plain string array.
    */
    getOptionsArray(): string[] {
        if (this.options === undefined) return [];
        return this.options.map((option) => option.label);
    }
    // This format is to check for an array of answers.
    // You can use it in the format isCorrect(param1, param2, param3...)
    // or isCorrect(['string', 'string', 'string'])
    // the parameters will always go into a single array called "answers"
    isCorrectSequence(...answers: string[]): boolean {
        // do the thing here.
        console.log(answers);
        
        // loop through the answers array
        // if the order doesn't match or is incorrect
        // return false

        // after the loop has ended
        // return true

        return false;
    }
    
    // Checks that a single answer is correct.
    isCorrect(answer: string): boolean {
        const option = this.options.find((option) => option.label === answer);
        if (!option) return false;
        return option.correct;
    }

    correctLength(): number
    {
        return this.options.filter(o => o.correct).length;
    }
}
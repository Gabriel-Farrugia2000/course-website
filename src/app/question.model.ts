export class Question
{
    // Setting the default value in a class should make all fields optional.
    description: string = ''; 
    questionText: string = '';
    attempts: number;
    options: { label: string; correct: boolean, order?: number }[] = [];
    
    constructor(
        description: string,
        questionText: string,
        options: { label: string; correct: boolean; order?: number }[]
    ) {
        this.description = description;
        this.questionText = questionText;
        this.attempts = 0;
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
    isCorrectSequence(answers: string[]): boolean {
        for (var i = 0; i < answers.length; i++)
            {
                const answer = answers[i];
                if (!this.isCorrect(answer)) return false;
                
                const item = this.options.find((option) => option.label === answer && i === option.order);
                if (!item) return false;
            }

            const correctAnswers = this.options.filter(option => option.correct).length;
            return answers.length === correctAnswers;
        
    }
    
    // Checks that the answer is correct.
    isCorrect(answer: string) {
        const option = this.options.find((option) => option.label === answer);
        if (!option) return false;
        return option.correct;
    }
}
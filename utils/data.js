import { AsyncStorage } from 'react-native';
export const APP_KEY = 'UdaciFlashcards';

export const data = {
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'Javascript is what side language?',
                answer: 'Client Side'
            }
        ]
    },
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A user interface management library'
            },
            {
                question: 'Where we need to make Ajax requests in React?',
                answer: 'In the componentDidMount lifecycle event'
            }
        ]
    }
}

function initialize() {
    AsyncStorage.setItem(APP_KEY, JSON.stringify(data))
    return data
}

export function formatDeckResults(results) {
    return results === null ? initialize() : JSON.parse(results)
}
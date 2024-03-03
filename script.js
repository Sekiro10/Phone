// Paste the provided JavaScript code here
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    AddPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }

    RemovePhoneNumber(number) {
        this.phoneNumbers = this.phoneNumbers.filter(num => num !== number);
    }

    DeleteLastPhoneNumber() {
        if (this.phoneNumbers.length > 0) {
            const deletedNumber = this.phoneNumbers.pop();
            console.log(`Deleted last phone number: ${deletedNumber}`);
            updateLog(`Deleted last phone number: ${deletedNumber}`);
        } else {
            console.log("No phone numbers to delete.");
        }
    }

    DialPhoneNumber(number) {
        if (this.phoneNumbers.includes(number)) {
            this.notifyObservers(number);
        } else {
            console.log("Phone number not found");
        }
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.notify(number));
    }

    addObserver(observer) {
        this.observers.push(observer);
    }
}

class Observer {
    notify(number) {
        console.log(`Dialing phone number: ${number}`);
        updateLog(`Dialing phone number: ${number}`);
    }
}

function addPhoneNumber() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneNumber) {
        telephone.AddPhoneNumber(phoneNumber);
        phoneNumberInput.value = '';
        updateLog(`Added phone number: ${phoneNumber}`);
    }
}

function removePhoneNumber() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumberToRemove = phoneNumberInput.value.trim();
    if (phoneNumberToRemove) {
        telephone.RemovePhoneNumber(phoneNumberToRemove);
        phoneNumberInput.value = '';
        updateLog(`Removed phone number: ${phoneNumberToRemove}`);
    }
}

function deleteLastPhoneNumber() {
    telephone.DeleteLastPhoneNumber();
}

function dialPhoneNumber() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneNumber) {
        telephone.DialPhoneNumber(phoneNumber);
    }
}

function updateLog(message) {
    const logContainer = document.getElementById('log');
    if (logContainer) {
        const logEntry = document.createElement('div');
        logEntry.textContent = message;
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;
    } else {
        console.error("Log container not found.");
    }
}

// Example usage
const telephone = new Telephone();
const observer = new Observer();
telephone.addObserver(observer);

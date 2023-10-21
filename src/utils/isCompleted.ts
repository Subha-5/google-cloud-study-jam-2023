const eligibleStatuses = ["Completed", "Ready for Swags"]

export default function isCompleted(status: string) {
    let flag: boolean = false;
    if (eligibleStatuses.includes(status)) {
        flag = true
    }
    return flag;
}
/**
 * Async/Await Demo
 * @param event
 * @param context
 * @param context.done
 */
export const handler = async (event, context) => {
    context.done(null, await wait());
};

function wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok')
        }, 2000);
    });
}
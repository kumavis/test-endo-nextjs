if (typeof lockdown !== 'undefined' && !globalThis.didLockdown) {
    lockdown({
        // see errors for debugging
        errorTaming: 'unsafe',
        // allow eval for bundle
        evalTaming: 'unsafeEval',
        // nextjs wants to set the console
        consoleTaming: 'unsafe',
    })
    console.log('lockdown')
    globalThis.didLockdown = true;
} else if (!globalThis.didLockdown) {
    console.warn('no lockdown')
    debugger
}

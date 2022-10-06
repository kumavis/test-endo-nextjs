if (typeof lockdown !== 'undefined') {
    lockdown({
        // see errors for debugging
        errorTaming: 'unsafe',
        // allow eval for bundle
        evalTaming: 'unsafeEval',
    })
    console.log('ayy')
    debugger
} else {
    console.warn('no lockdown')
    debugger
}

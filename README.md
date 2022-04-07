# NetSuite Map/Reduce Kill Switch

## How it works
The idea is to read certain public cache value at the beginning of each iteration of `map()` and `reduce()` stage. When cache value is set, current iteration of the stage is skipped, therefore allowing for M/R script to finish much quicker.

## How to implement
Any Map/Reduce scripts that need to be terminated quickly need to check for `terminateMrScript()` value at the beginning of `map()` or `reduce()` stage.
While Map/Reduce script runs, you need to call the `setMrScriptKillswitch()` method in any other file on your current NS account. This will set cache value, which then allow to valuate the `terminateMrScript()` method.
When Map/Reduce has stopped, call the `removeMrScriptKillswitch()` script.

## Notes
* This is not a full project but rather set of files that you need to implement yourself,
* You can call the cache setting function in virtually any type of script.

/**
 * Example Map/Reduce usage
 *
 * LF_Example_MR.js
 *
 * @author Lukasz Formela <hello@lukaszformela.com>
 * @website lukaszformela.com
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(["N/runtime", "LF_Helpers.js"], function (_runtime, _helpers) {
  /**
   * Marks the beginning of the Map/Reduce process and generates input data.
   *
   * @typedef {Object} ObjectRef
   * @property {number} id - Internal ID of the record instance
   * @property {string} type - Record type id
   *
   * @return {Array|Object|Search|RecordRef} inputSummary
   * @since 2015.1
   */
  const getInputData = () => {
    return [];
  };

  /**
   * Executes when the map entry point is triggered and applies to each key/value pair.
   *
   * @param {MapSummary} mapContext - Data collection containing the key/value pairs to process through the map stage
   * @since 2015.1
   *
   * @returns {void}
   */
  const map = (mapContext) => {
    // If killswitch is activated, skip iteration
    const currentScript = _runtime.getCurrentScript();

    if (_helpers.terminateMrScript(currentScript.id)) {
      return;
    }
  };

  /**
   * The reduce function is invoked one time for each of key/value pairs provided by map()
   *
   * @param {ReduceSummary} reduceContext - Data collection containing the key/value pairs
   *                                        to process through the reduce stage
   *
   * @returns {void}
   */
  const reduce = (reduceContext) => {
    // If killswitch is activated, skip iteration
    const currentScript = _runtime.getCurrentScript();

    if (_helpers.terminateMrScript(currentScript.id)) {
      return;
    }
  };

  /**
   * Executes when the summarize entry point is triggered and applies to the result set.
   *
   * @param {Summary} summary - Holds statistics regarding the execution of a map/reduce script
   * @since 2015.1
   *
   * @returns {void}
   */
  const summarize = (summary) => {
    return;
  };
});

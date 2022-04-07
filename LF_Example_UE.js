/**
 * Example User Event usage
 *
 * LF_Example_UE.js
 *
 * @author Lukasz Formela <hello@lukaszformela.com>
 * @website lukaszformela.com
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["N/runtime", "LF_Helpers.js"], function (_runtime, _helpers) {
  const exports = {};

  /**
   * Function definition to be triggered before record is submitted.
   *
   * @param {Object} scriptContext Context of a script
   *
   * @returns {void}
   */
  const beforeSubmit = (scriptContext) => {
    const currentScript = _runtime.getCurrentScript();

    _helpers.setMrScriptKillswitch(currentScript.id);
  };

  exports.beforeSubmit = beforeSubmit;

  return exports;
});

/**
 * Helpers module
 *
 * LF_Helpers.js
 *
 * @author Lukasz Formela <hello@lukaszformela.com>
 * @website lukaszformela.com
 *
 * @NApiVersion 2.1
 */
define(['N/cache'], function (_cache) {
  /**
   * Sets Kill Switch on particular MR script
   *
   * @param {string} scriptId MR Script ID
   * @returns {void}
   */
  const setMrScriptKillswitch = (scriptId) => {
    const cachedMrData = _cache.getCache({
      name: scriptId,
      scope: _cache.Scope.PUBLIC,
    });

    cachedMrData.get({
      key: `${scriptId}_killswitch`,
      loader: () => '1',
    });

    log.debug({
      title: 'setMrScriptKillswitch()',
      details: `Killswitch for script ${scriptId} is now set!`,
    });
  };

  /**
   * Removes Kill Switch from particular MR script
   *
   * @param {string} scriptId MR Script ID
   * @returns {void}
   */
  const removeMrScriptKillswitch = (scriptId) => {
    const cachedMrData = _cache.getCache({
      name: scriptId,
      scope: _cache.Scope.PUBLIC,
    });

    const cachedKillSwitch = cachedMrData.get({
      key: `${scriptId}_killswitch`,
    });

    if (cachedKillSwitch === '1') {
      cachedMrData.remove({
        key: `${scriptId}_killswitch`,
      });
    }

    log.debug({
      title: 'removeMrScriptKillswitch()',
      details: `Killswitch for script ${scriptId} is now removed!`,
    });
  };

  /**
   *                       ______
   *                     <((((((\\\
   *                     /      . }\
   *                     ;--..--._|}
   *  (\                 '--/\--'  )
   *   \\                | '-'  :'|
   *    \\               . -==- .-|
   *     \\               \.__.'   \--._
   *     [\\          __.--|       //  _/'--.
   *     \ \\       .'-._ ('-----'/ __/      \
   *      \ \\     /   __>|      | '--.       |
   *       \ \\   |   \   |     /    /       /
   *        \ '\ /     \  |     |  _/       /
   *         \  \       \ |     | /        /
   *          \  \      \        /
   *
   * The Terminator
   *
   * Kill switch for MR task
   * Checks whether speficic public cache value is present,
   * so any action in MR can be skipped, and thus leading to
   * final MR stage ASAP.
   *
   * @returns {void}
   */
  const terminateMrScript = (scriptId) => {
    const cachedMrData = _cache.getCache({
      name: scriptId,
      scope: _cache.Scope.PUBLIC,
    });

    const cachedKillSwitch = cachedMrData.get({
      key: `${scriptId}_killswitch`,
    });

    return cachedKillSwitch === '1';
  };

  const exports = {
    setMrScriptKillswitch,
    removeMrScriptKillswitch,
    terminateMrScript,
  };
  
  return exports;
}

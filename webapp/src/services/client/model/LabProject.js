/*
 * ML Lab Service
 * Functionality to create and manage Lab projects, services, datasets, models, and experiments.
 *
 * OpenAPI spec version: 2.2.0-SNAPSHOT
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LabExperiment', 'model/LabFileCollection', 'model/LabProjectsStatistics', 'model/LabService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LabExperiment'), require('./LabFileCollection'), require('./LabProjectsStatistics'), require('./LabService'));
  } else {
    // Browser globals (root is window)
    if (!root.MlLabService) {
      root.MlLabService = {};
    }
    root.MlLabService.LabProject = factory(root.MlLabService.ApiClient, root.MlLabService.LabExperiment, root.MlLabService.LabFileCollection, root.MlLabService.LabProjectsStatistics, root.MlLabService.LabService);
  }
}(this, function(ApiClient, LabExperiment, LabFileCollection, LabProjectsStatistics, LabService) {
  'use strict';

  /**
   * The LabProject model module.
   * @module model/LabProject
   * @version 2.2.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>LabProject</code>.
   * @alias module:model/LabProject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LabProject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LabProject} obj Optional instance to populate.
   * @return {module:model/LabProject} The populated <code>LabProject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('visibility'))
        obj.visibility = ApiClient.convertToType(data['visibility'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Number');
      if (data.hasOwnProperty('isAvailable'))
        obj.isAvailable = ApiClient.convertToType(data['isAvailable'], 'Boolean');
      if (data.hasOwnProperty('statistics'))
        obj.statistics = LabProjectsStatistics.constructFromObject(data['statistics']);
      if (data.hasOwnProperty('services'))
        obj.services = ApiClient.convertToType(data['services'], [LabService]);
      if (data.hasOwnProperty('experiments'))
        obj.experiments = ApiClient.convertToType(data['experiments'], [LabExperiment]);
      if (data.hasOwnProperty('datasets'))
        obj.datasets = LabFileCollection.constructFromObject(data['datasets']);
      if (data.hasOwnProperty('models'))
        obj.models = LabFileCollection.constructFromObject(data['models']);
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * @member {String} visibility
   */
  exports.prototype.visibility = undefined;

  /**
   * @member {Number} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {Boolean} isAvailable
   */
  exports.prototype.isAvailable = undefined;

  /**
   * @member {module:model/LabProjectsStatistics} statistics
   */
  exports.prototype.statistics = undefined;

  /**
   * @member {Array.<module:model/LabService>} services
   */
  exports.prototype.services = undefined;

  /**
   * @member {Array.<module:model/LabExperiment>} experiments
   */
  exports.prototype.experiments = undefined;

  /**
   * @member {module:model/LabFileCollection} datasets
   */
  exports.prototype.datasets = undefined;

  /**
   * @member {module:model/LabFileCollection} models
   */
  exports.prototype.models = undefined;

  /**
   * @member {Array.<String>} members
   */
  exports.prototype.members = undefined;

  return exports;

}));

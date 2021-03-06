// import { StorableSceneType } from "@bridged.xyz/client-sdk";

// TODO -> indexing for complex query might be useful
interface IGetSceneQuery {
  /**
   *  the components' scene id. finds scene that contains the components givven.
   *  example usecase : "find usage of this component" - when user clicks component, and wants to see where it's being used more.
   */
  components?: string[];

  /**
   * filters type of the quering scene.
   * when no types or '*' provided, it wont run extra query for filtering the scene type
   * example usecase : find more screen with this component used. - originally, if types not set, it will both return components and screens as result, but that won't be the desired result.
   */
  //   types?: "*" | StorableSceneType;

  /**
   * retrieves scene with givven alias name.
   */
  alias?: string;

  /**
   * the givven references are ids of the scene, wich returns the scenes referenced by givven scene ids.
   * inclluded options are,
   * - routing (if the routing points to the search targets, it will be included on this filter)
   * - component usage (if the component points to the target, it will be included on this filter)
   */
  references: string[];

  /**
   * if this field is provided, the result will explicitly be screens, since only the scene with type = "SCREEN" can contain routes.
   * TODO -> logic gate - should it iterate the routes as target scene? or should we find scenes referencing this routes?
   */
  routesFrom?: string[];
}

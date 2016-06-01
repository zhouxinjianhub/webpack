/**
 * Created by wolf on 16-4-25.
 */
//不能同时为依赖文件和入口文件
import "../../style/css/index.less";
import "core";
import "../../style/css/font-awasome.less";
//import heads from "../head.js";
document.write("success {0}".format('format'));
$(".index").css({fontSize: "25px"});
let aa = "sdfa";
alert(aa);
//
//let module = {}, loaded = false, deffer = null, nodeConfig, configure;
//
//
//let source = {
//    initialized: false,
//    element: $("#source"),
//    container: $("#source-fields"),
//    view: null,
//    data: null,
//    init: function () {
//        source.data = null;
//        if (!source.initialized) {
//            source.view = source.container.datagrid({
//                pagination: {
//                    on: false
//                },
//                columns: [
//                    {
//                        field: "field",
//                        caption: "<span data-lang='{0}'></span>".format("tool.olap.datagrid.column.field"),
//                        width: 180
//                    },
//                    {
//                        field: "displayname",
//                        caption: "<span data-lang='{0}'></span>".format("tool.olap.datagrid.column.displayName"),
//                        width: 180,
//                        editable: true,
//                        editor: {
//                            attributes: {
//                                required: "required",
//                                pattern: "^\\s*\\S+\\s*$"
//                            }
//                        },
//                        change: source.updateDisplayName
//                    },
//                    {
//                        field: "datatype",
//                        caption: "<span data-lang='{0}'></span>".format("tool.olap.datagrid.column.dataType"),
//                        width: 120
//                    }
//                ],
//                loadSuccess: source.loaded,
//                loadError: source.clear
//            });
//            source.initialized = true;
//        }
//    },
//    load: function (_config, schema) {
//        source.init();
//        source.element.addClass("opened");
//
//        if (schema) {
//            source.data = schema;
//            source.view.setData(schema.fields || []);
//        } else {
//            source.view.reload("result/resultset/gettableschema", {
//                dbinfo: JSON.stringify(configure.database),
//                tableinfo: JSON.stringify(configure.datatables[_config.physicsid])
//            });
//        }
//    },
//    loaded: function (d) {
//        source.data = d;
//        source.view.setData(d.fields);
//    },
//    clear: function () {
//        source.view.reset();
//    },
//    updateDisplayName: function (cell, val, data) {
//        let displayName = val.displayname, fieldId = data.id;
//        $.each(configure.schemas, function (virtualId, schema) {
//            if (virtualId !== source.data.virtualid) {
//                $.each(schema.fields, function (i, field) {
//                    if (field.id === fieldId) {
//                        field.displayname = displayName;
//                        return false;
//                    }
//                });
//            }
//        });
//    }
//};
//
//let join = {
//    initialized: false,
//    element: $("#join"),
//    workbench: $("#join-workbench"),
//    nodes: $("#join-nodes"),
//    binder: null,
//    setter: $("#join-setter"),
//    setBinder: null,
//    conditions: null,
//    prefix: "t",
//    init: function () {
//        if (!join.initialized) {
//            join.workbench.bind({
//                dragover: join.events.dragover,
//                dragleave: join.events.dragleave,
//                drop: join.events.drop,
//                click: join.events.click
//            }).on("dragstart", ".el", join.events.itemDragstart)
//                .on("dragend", ".el", join.events.itemDragend)
//                .on("dragover", ".item", join.events.itemDragover)
//                .on("dragleave", ".item", join.events.itemDragleave)
//                .on("drop", ".item", join.events.drop)
//                .on("click", ".close", join.events.itemRemove)
//                .on("click", ".join", join.events.joinClick);
//            join.nodes.on("dragstart", "button", join.events.nodeDragstart)
//                .on("dragend", "button", join.events.nodeDragend);
//
//            join.initialized = true;
//        }
//    },
//    structure: {
//        source: null,
//        target: null
//    },
//    load: function (_config, schema) {
//        join.init();
//        join.element.addClass("opened");
//        join.reset();
//        if (_config) {
//            $.each(_config.sources, function (i, sid) {
//                join.node.push(sid);
//            });
//
//            if (!_config.setting || !$.isPlainObject(_config.setting) || $.isEmptyObject(_config.setting))
//                _config.setting = {};
//
//            join.binder = new dataBinding(_config.setting);
//            $.each(_config.setting, function (i, option) {
//                if ($.isPlainObject(option) && !option.joinaliasname) {
//                    join.item.create(option, true);
//                    return false;
//                }
//            });
//        }
//    },
//    node: {
//        dragging: null,
//        push: function (virtualId) {
//            if (virtualId) {
//                let o = configure.config[virtualId];
//                if (o) {
//                    join.nodes.append('<button draggable="true" value="{0}" class="node ico {1} {2}">{3}</button>'.format(o.virtualid, parent.enums.tools[o.tool].icon, o.tool, o.displayname));
//                }
//            }
//        }
//    },
//    item: {
//        dragging: null,
//        create: function (option, recursion) {
//            if (option && option.virtualid) {
//                let el = $('<div class="item" data-virtual-id="{0}" data-alias="{1}" data-suffix="{2}"><div class="join"><span class="{3}">&nbsp;</span></div><div class="el" draggable="true"><span data-suffix="{2}" class="{5}">{4}</span><button class="close pseudo-link icon ico-close" value="join-remove"></button></div><div class="links"></div></div>'.format(option.virtualid, option.aliasname, option.suffix, option.jointype, configure.config[option.virtualid].displayname, option.suffix > 0 ? "suffix" : ""));
//                /*let el = $("<div class='option' data-virtualId='" + option.virtualId + "' data-aliasName='" + option.aliasName + "' data-suffix='" + option.suffix + "' draggable='true'><div class='join " + option.joinType + "'><span>&nbsp;</span></div><div class='tEl'><span data-suffix='" + option.suffix + "'>" + option.displayName + "</span><button class='close'></button></div><div class='subitems'></div></div>");*/
//                if (option.joinaliasname) {
//                    let _container = join.workbench.find("div[data-alias='{0}']".format(option.joinaliasname)).children(".links");
//                    _container.append(el);
//
//                    join.item.check(_container);
//                    //checkWorkbenchSubItems(_container);
//                } else
//                    join.workbench.append(el);
//
//                let _ds = {};
//                _ds[option.aliasname] = option;
//                join.binder.update(_ds);
//
//                if (recursion === true) {
//                    $.each(join.binder.data, function (alias, o) {
//                        if (o.joinaliasname === option.aliasname) {
//                            join.item.create(o, true);
//                        }
//                    });
//                    join.item.check(el.children(".links"));
//                }
//            }
//        },
//        check: function (links) {
//            if (links.children(".item").length > 1) {
//                links.addClass("multiLink");
//            } else {
//                links.removeClass("multiLink");
//            }
//        },
//        generate: {
//            alias: function () {
//                let inx = 1, existItem = join.workbench.find("div[data-alias='{0}']".format(join.prefix + String(inx)));
//                while (existItem.length > 0) {
//                    inx++;
//                    existItem = join.workbench.find("div[data-alias='{0}']".format(join.prefix + String(inx)));
//                }
//                return join.prefix + String(inx);
//            },
//            suffix: function (virtualId) {
//                let index = 1, none = true, tds = join.workbench.find("[data-virtual-id='" + virtualId + "']");
//
//                if (tds.length == 0)
//                    return "";
//                else {
//                    while (none) {
//                        tds = join.workbench.find("[data-virtual-id='" + virtualId + "'][data-suffix='" + index + "']");
//                        if (tds.length == 0)
//                            none = false;
//                        else
//                            index++;
//                    }
//
//                    return index;
//                }
//            },
//            conditions: function (sourceVirtualId, targetVirtualId) {
//                let _cs = [];
//                if (sourceVirtualId && targetVirtualId && sourceVirtualId !== targetVirtualId) {
//                    let sourceDataStructure = configure.schemas[sourceVirtualId],
//                        targetDataStructure = configure.schemas[targetVirtualId];
//
//                    if ($.type(sourceDataStructure.fields) === "array" && $.type(targetDataStructure.fields) === "array") {
//                        $.each(sourceDataStructure.fields, function (si, sd) {
//                            $.each(targetDataStructure.fields, function (ti, td) {
//                                if (sd.originalfield == td.originalfield && sd.datatype == td.datatype) {
//                                    _cs.push({
//                                        "sourcefield": sd.aliasname,
//                                        "targetfield": td.aliasname
//                                    });
//                                    return false;
//                                }
//                            });
//                            if (_cs.length > 0) return false;
//                        });
//                    }
//                }
//                return _cs;
//            },
//            structure: function (targetAlias) {
//                if (targetAlias) {
//                    let sourceAlias = join.binder.data[targetAlias].joinaliasname;
//                    if (sourceAlias) {
//                        let targetVirtualId = join.binder.data[targetAlias].virtualid,
//                            sourceVirtualId = join.binder.data[sourceAlias].virtualid;
//                        if (targetVirtualId && sourceVirtualId) {
//                            let sD = $("#join-condition-source").empty(), sDStr = "",
//                                tD = $("#join-condition-target").empty(), tDStr = "";
//
//                            join.structure.source = configure.schemas[sourceVirtualId].fields;
//                            join.structure.target = configure.schemas[targetVirtualId].fields;
//
//                            $.each(join.structure.source, function (i, f) {
//                                sDStr += "<button value='{0}'>{1}</button>".format(f.aliasname, f.displayname);
//                            });
//
//                            sD.html(sDStr);
//
//                            $.each(join.structure.target, function (i, f) {
//                                tDStr += "<button value='{0}'>{1}</button>".format(f.aliasname, f.displayname);
//                            });
//
//                            tD.html(tDStr);
//
//                            function _source_format_displayname(val) {
//                                let displayName = "<span data-lang='tool.filter.condition.selectField'></span>";
//                                $.each(join.structure.source, function (i, field) {
//                                    if (field.aliasname === val) {
//                                        displayName = field.displayname;
//                                        return false;
//                                    }
//                                });
//                                return displayName;
//                            }
//
//                            function _target_format_displayname(val) {
//                                let displayName = "<span data-lang='tool.filter.condition.selectField'></span>";
//                                $.each(join.structure.target, function (i, field) {
//                                    if (field.aliasname === val) {
//                                        displayName = field.displayname;
//                                        return false;
//                                    }
//                                });
//                                return displayName;
//                            }
//
//                            join.conditions = $("#join-conditions").datagrid({
//                                columns: [{
//                                    field: "sourcefield",
//                                    caption: configure.config[sourceVirtualId].displayname,
//                                    editable: true,
//                                    editor: {
//                                        type: "select",
//                                        attributes: {
//                                            "data-popup": "join-condition-source",
//                                            "class": "dropdown"
//                                        }
//                                    },
//                                    width: 120,
//                                    formatter: _source_format_displayname
//                                }, {
//                                    field: "targetfield",
//                                    caption: configure.config[targetVirtualId].displayname,
//                                    editable: true,
//                                    editor: {
//                                        type: "select",
//                                        attributes: {
//                                            "data-popup": "join-condition-target",
//                                            "data-display-path": "targetdisplayname",
//                                            "class": "dropdown"
//                                        }
//                                    },
//                                    width: 120,
//                                    formatter: _target_format_displayname
//                                }, {
//                                    field: "_rowid",
//                                    width: 28,
//                                    formatter: function (val) {
//                                        return "<button value='join-condition-remove' class='pseudo-link icon ico-close' data-row-id='" + val + "'></button>";
//                                    }
//                                }],
//                                addRow: {
//                                    enable: true,
//                                    verify: function (data) {
//                                        return !!data && !!data.sourcefield && !!data.targetfield;
//                                    }
//                                },
//                                execute: function(e) {
//                                    if (e.currentTarget.value === "join-condition-remove" && e.currentTarget.dataset.rowId) {
//                                        join.conditions.remove(e.currentTarget.dataset.rowId);
//                                    }
//                                    return false;
//                                }
//                            });
//
//                        }
//
//                    }
//                }
//            }
//        }
//    },
//    reset: function () {
//        join.nodes.empty();
//        join.workbench.empty();
//        join.setter.removeClass("opened");
//        if (join.binder) join.binder.unbind();
//        if (join.setBinder) join.setBinder.unbind();
//    },
//    unset: function () {
//        join.workbench.find(".setin").removeClass("setin");
//        join.setter.removeClass("opened");
//        if (join.setBinder) join.setBinder.unbind();
//    },
//    events: {
//        click: function () {
//            join.unset();
//        },
//        dragover: function (e) {
//            e.originalEvent.dataTransfer.dropEffect = "none";
//            let _rootVirtualId = join.workbench.children(".item:first").attr("data-virtual-id");
//            if (join.node.dragging && join.node.dragging.val() !== _rootVirtualId) {
//                e.originalEvent.dataTransfer.dropEffect = "copy";
//                join.workbench.addClass("dropping");
//            } else if (join.item.dragging && join.item.dragging.attr("data-virtual-id") !== _rootVirtualId) {
//                if (!join.item.dragging.parent().attr("id")) {
//                    e.originalEvent.dataTransfer.dropEffect = "link";
//                    join.workbench.addClass("dropping");
//                }
//            }
//
//            return false;
//        },
//        dragleave: function (e) {
//            join.workbench.removeClass("dropping");
//            return false;
//        },
//        drop: function (e) {
//            e.currentTarget.classList.remove("dropping");
//            let _sourceVirtualId = e.currentTarget.id ? join.workbench.children(".item:first").attr("data-virtual-id") : e.currentTarget.dataset.virtualId,
//                _sourceAlias = e.currentTarget.id ? join.workbench.children(".item:first").attr("data-alias") : e.currentTarget.dataset.alias;
//            if (join.node.dragging) {
//                let _virtualId = join.node.dragging.val();
//                if (_virtualId !== _sourceVirtualId) {
//                    let _suffix = join.item.generate.suffix(_virtualId), _config = configure.config[_virtualId],
//                        _conditions = join.item.generate.conditions(_virtualId, _sourceVirtualId);
//                    join.item.create({
//                        virtualid: _virtualId,
//                        joinvirtualid: _sourceVirtualId,
//                        joinaliasname: _sourceAlias,
//                        suffix: _suffix,
//                        aliasname: join.item.generate.alias(),
//                        jointype: _conditions.length > 0 ? "inner" : "none",
//                        conditions: _conditions
//                    });
//                }
//            } else if (join.item.dragging) {
//                let alias = join.item.dragging.attr("data-alias"), nowEl = e.currentTarget.id ? join.workbench.children(".item:first").children(".links") : $(e.currentTarget).children(".links");
//                if (alias) {
//                    join.binder.data[alias].joinaliasname = _sourceAlias;
//                    let originEl = join.item.dragging.parent();
//                    nowEl.append(join.item.dragging);
//                    join.item.check(originEl);
//                    join.item.check(nowEl);
//                }
//            }
//            return false;
//        },
//        nodeDragstart: function (e) {
//            join.unset();
//            e.originalEvent.dataTransfer.effectAllowed = "copy";
//            join.node.dragging = $(this);
//        },
//        nodeDragend: function () {
//            join.node.dragging = null;
//        },
//        itemDragstart: function (e) {
//            join.unset();
//            e.originalEvent.dataTransfer.effectAllowed = "link";
//            join.item.dragging = $(this).parent().addClass("dragging");
//        },
//        itemDragend: function () {
//            if (join.item.dragging)
//                join.item.dragging.removeClass("dragging");
//            join.item.dragging = null;
//        },
//        itemDragover: function (e) {
//            e.originalEvent.dataTransfer.dropEffect = "none";
//            if (join.node.dragging && join.node.dragging.val() !== e.currentTarget.dataset.virtualId) {
//                e.originalEvent.dataTransfer.dropEffect = "copy";
//                e.currentTarget.classList.add("dropping");
//            } else if (join.item.dragging && join.item.dragging.attr("data-virtual-id") !== e.currentTarget.dataset.virtualId) {
//                e.originalEvent.dataTransfer.dropEffect = "link";
//                e.currentTarget.classList.add("dropping");
//            }
//            return false;
//        },
//        itemDragleave: function (e) {
//            e.currentTarget.classList.remove("dropping");
//            return false;
//        },
//        itemRemove: function (e) {
//            join.unset();
//            let item = $(e.currentTarget).parent().parent(), pConds = item.parent();
//
//            item.find(".item").each(function (i, dom) {
//                delete join.binder.data[dom.dataset.alias];
//            });
//            delete join.binder.data[item.attr("attr-alias")];
//
//            item.remove();
//            join.item.check(pConds);
//        },
//        joinClick: function (e) {
//            let el = $(e.currentTarget).parent();
//            if (!el.hasClass("setin")) {
//                let alias = el.attr("data-alias");
//                if (alias) {
//                    join.unset();
//                    join.item.generate.structure(alias);
//                    join.setBinder = join.setter.dataBinding(join.binder.data[alias], join.events.setUpdate);
//
//                    el.addClass("setin");
//                    join.setter.addClass("opened");
//                }
//            }
//            return false;
//        },
//        setUpdate: function (change) {
//            if (change.name === "jointype") {
//                join.workbench.find(".setin > .join > span").each(function (i, dom) {
//                    dom.removeAttribute("class");
//                    dom.classList.add(change.object.jointype);
//                });
//            }
//        }
//    }
//};
//
//
//let filter = {
//    initialized: false,
//    element: $("#filter"),
//    fields: $("#filter-fields"),
//    workbench: $("#filter-workbench"),
//    opera: $("#filter-opera"),
//    supportFields: {},
//    supportFieldArray: [],
//    selection: [],
//    current: null,
//    multipleReady: false,
//    commands: {
//        operas: null,
//        connects: null,
//        remove: null,
//        group: null,
//        ungroup: null
//    },
//    init: function () {
//        if (!filter.initialized) {
//            filter.commands.operas = $("button[data-group='filter-opera']");
//            filter.commands.connects = $("button[data-group='filter-connect']");
//            filter.commands.remove = $("button.filter-remove");
//            filter.commands.group = $("button.filter-combination");
//            filter.commands.ungroup = $("button.filter-dissolution");
//
//            addGlobalEventListeners(null, "keydown.filterMultiple", filter.events.keydown, true, true);
//            addGlobalEventListeners(null, "keyup.filterMultiple", filter.events.keyup, true, true);
//            filter.workbench.on("mouseover", ".condition, .groups", filter.events.mouseover)
//                .on("mouseout", ".condition, .groups", filter.events.mouseout)
//                .on("click", ".condition, .groups", filter.events.click);
//            filter.opera.on("click", "button", filter.events.opera);
//            filter.initialized = true;
//        }
//    },
//    load: function (_config, schema) {
//        filter.init();
//        filter.element.addClass("opened");
//        filter.reset();
//
//        let fields = [], filterItems;
//
//        if (_config) {
//            if (_config.sources.length === 1) {
//                fields = configure.schemas[_config.sources[0]].fields;
//                if (fields.length ===  0) {
//                    _config.setting = {};
//                }
//            } else {
//                _config.setting = {};
//            }
//
//            if (!$.isPlainObject(_config.setting) || $.isEmptyObject(_config.setting))
//                _config.setting = {items: []};
//
//            filterItems = _config.setting.items;
//        } else {
//            if ($.type(parent.childWindow.data.fields) ==="array")
//                fields = fields.concat(parent.childWindow.data.fields);
//            if ($.type(parent.childWindow.data.customFields) ==="array")
//                fields = fields.concat(parent.childWindow.data.customFields);
//
//            filterItems = parent.childWindow.data.filter;
//        }
//
//        let fStr = "";
//        $.each(fields, function (i, field) {
//            fStr += "<button value='{0}'>{1}</button>".format(field.aliasname, field.displayname);
//            filter.supportFields[field.aliasname] = field;
//            filter.supportFieldArray.push(field.aliasname);
//        });
//        filter.fields.html(fStr);
//        filter.condition.create(filterItems);
//        filter.available();
//    },
//    reset: function () {
//        filter.workbench.find("[data-bind]").dataUnbinding();
//        filter.workbench.empty();
//        filter.supportFields = null;
//        filter.supportFields = {};
//        filter.supportFieldArray.length = 0;
//        filter.selection.length = 0;
//        filter.current = null;
//    },
//    condition: {
//        create: function (items, container, appendType) {
//            appendType = appendType || "append";
//            if (items && $.type(items) === "array") {
//                if (!(container instanceof jQuery) || container.length === 0) container = filter.workbench;
//                $.each(items, function (i, item) {
//                    if (item.type === "group") {
//                        let g = $("<div class='groups'><b name='connector'></b><div class='conditions'></div></div>");
//                        eval("container.{0}(g)".format(appendType));
//                        g.dataBinding(item);
//                        filter.condition.create(item.children, g.children(".conditions"));
//                    } else if (item.aliasname in filter.supportFields) {
//                        let c = $('<div class="condition"><b name="connector"></b><button class="dropdown" name="aliasname" data-popup="filter-fields"></button><b name="operator"></b><span name="value"></span><input type="text" name="value" /></div>');
//                        eval("container.{0}(c)".format(appendType));
//                        c.dataBinding(item, filter.condition.update);
//                    }
//                });
//            }
//        },
//        add: function () {
//            if (filter.supportFieldArray.length > 0) {
//                let item = $.extend({}, filter.supportFields[filter.supportFieldArray[0]], {
//                    "type": "condition",
//                    "connector": "AND",
//                    "operator": "=",
//                    "value": ""
//                }), group = filter.workbench;
//                if (filter.current && filter.current.hasClass("group")) {
//                    group = filter.current.children(".conditions");
//                    filter.current.dataBinding().data.children.push(item);
//                } else if (nodeConfig) {
//                    nodeConfig.setting.items.push(item);
//                } else if (parent.childWindow.data.filter) {
//                    parent.childWindow.data.filter.push(item);
//                }
//                filter.condition.create([item], group);
//            }
//        },
//        remove: function () {
//            $.each(filter.selection, function (i, id) {
//                let node = filter.workbench.find("[data-bind='{0}']".format(id)),
//                    parentNode = node.parentsUntil("#filter-workbench", "[data-bind]:first"), pcs = nodeConfig.setting.items,
//                    condition = node.dataBinding().data;
//
//                node.find("[data-bind]").dataBinding("unbind");
//                if (parentNode.length > 0) {
//                    pcs = parentNode.dataBinding().data.children;
//                }
//
//                $.each(pcs, function (j, c) {
//                    if (c == condition) {
//                        pcs.splice(j, 1);
//                        return false;
//                    }
//                });
//
//                node.dataBinding("unbind");
//                node.remove();
//            });
//            filter.selection.length = 0;
//            filter.current = null;
//            filter.available();
//
//            log(nodeConfig);
//        },
//        update: function(change) {
//            if (change.name === "aliasname") {
//                let aliasname = change.object.aliasname;
//                if (aliasname in filter.supportFields) {
//                    $.extend(change.object, filter.supportFields[aliasname]);
//                }
//            }
//        },
//        combination: function () {
//            if (filter.selection.length > 1) {
//                let group = {
//                    "type": "group",
//                    "connector": "and",
//                    "children": []
//                }, container = null, fc = null, pcs = nodeConfig.setting.items;
//
//                $.each(filter.selection, function (i, d) {
//                    let node = filter.workbench.find("[data-bind='{0}']".format(d)),
//                        condition = node.dataBinding().data;
//
//                    if (i === 0) {
//                        group.connector = condition.connector;
//                        let parentNode = node.parentsUntil("#filter-workbench", "[data-bind]:first");
//                        if (parentNode.length > 0) {
//                            pcs = parentNode.dataBinding().data.children;
//                        }
//                        container = node;
//                        fc = condition;
//                    }
//
//                    group.children.push(condition);
//                });
//
//                $.each(pcs, function (i, c) {
//                    if (c == fc) {
//                        pcs.splice(i, 0, group);
//                        return false;
//                    }
//                });
//
//                filter.condition.create([group], container, "before");
//                filter.condition.remove();
//            }
//        },
//        dissolution: function () {
//            $.each(filter.selection, function (i, d) {
//                let node = filter.workbench.find("[data-bind='{0}']".format(d)), condition = node.dataBinding().data;
//                if (condition.type === "group") {
//                    if (condition.children.length > 0) {
//                        let next = node.next(), appendType = "before", parentNode = node.parentsUntil("#filter-workbench", "[data-bind]:first"), pcs = nodeConfig.setting.items;
//                        if (next.length === 0) {
//                            appendType = "append";
//                            next = node.parentsUntil("#filter-workbench", "[data-bind]:first");
//                            if (next.length === 0) {
//                                next = filter.workbench;
//                            } else {
//                                next = next.children(".conditions");
//                            }
//                        }
//
//                        if (parentNode.length > 0) {
//                            pcs = parentNode.dataBinding().data.children;
//                        }
//
//                        $.each(pcs, function (i, c) {
//                            if (c == condition) {
//                                [].splice.apply(pcs, [i, 0].concat(condition.children));
//                                return false;
//                            }
//                        });
//
//                        filter.condition.create(condition.children, next, appendType);
//                        filter.condition.remove();
//                    }
//                }
//            });
//        }
//    },
//    available: function () {
//        filter.workbench.find(".editing").removeClass("editing");
//        if (filter.selection.length === 1) {
//            filter.current = filter.workbench.find("[data-bind='{0}']".format(filter.selection[0])).addClass("editing");
//        } else {
//            filter.current = null;
//        }
//
//        filter.commands.operas.prop("disabled", !(filter.selection.length === 1 && !filter.current.hasClass("groups")));
//        filter.commands.connects.prop("disabled", filter.selection.length === 0);
//        filter.commands.remove.prop("disabled", filter.selection.length === 0);
//        filter.commands.group.prop("disabled", filter.selection.length < 2);
//
//        let hasGroup = false;
//        $.each(filter.selection, function (i, d) {
//            if (filter.workbench.find(".groups[data-bind='{0}']".format(d)).length > 0) {
//                hasGroup = true;
//                return false;
//            }
//        });
//        filter.commands.ungroup.prop("disabled", !hasGroup);
//    },
//    events: {
//        click: function (e) {
//            if (e.target && !e.target.classList.contains("dropdown")) {
//                popup.close();
//                if (filter.multipleReady) {
//                    e.currentTarget.classList.toggle("selected");
//                    if (e.currentTarget.classList.contains("selected")) {
//                        e.currentTarget.classList.add("multiple-ready");
//                        filter.selection.push(e.currentTarget.dataset.bind);
//                        $(e.currentTarget).find(".selected").each(function (i, dom) {
//                            dom.classList.remove("selected");
//                            filter.selection.remove(dom.dataset.bind);
//                        });
//                    } else {
//                        e.currentTarget.classList.remove("multiple-ready");
//                        filter.selection.remove(e.currentTarget.dataset.bind);
//                    }
//                } else {
//                    filter.workbench.find(".multiple-ready").removeClass("multiple-ready");
//                    filter.workbench.find(".selected").removeClass("selected");
//                    filter.selection = null;
//                    filter.selection = [];
//                    filter.selection.push(e.currentTarget.dataset.bind);
//                    e.currentTarget.classList.add("selected");
//                }
//
//                filter.available();
//                return false;
//            }
//        },
//        mouseover: function (e) {
//            e.currentTarget.classList.add("hover");
//            return false;
//        },
//        mouseout: function (e) {
//            e.currentTarget.classList.remove("hover");
//            return false;
//        },
//        keydown: function (e) {
//            if (e.shiftKey || e.ctrlKey) {
//                if (!filter.multipleReady) {
//                    filter.workbench.find(".groups.selected").addClass("multiple-ready");
//                    filter.multipleReady = true;
//                }
//            }
//        },
//        keyup: function (e) {
//            filter.workbench.find(".multiple-ready").removeClass("multiple-ready");
//            filter.multipleReady = false;
//        },
//        opera: function (e) {
//            switch (e.currentTarget.value) {
//                case "filter-add":
//                    filter.condition.add();
//                    break;
//                case "filter-remove":
//                    filter.condition.remove();
//                    break;
//                case "filter-equal":
//                case "filter-notEqual":
//                case "filter-greater":
//                case "filter-greaterEqual":
//                case "filter-less":
//                case "filter-lessEqual":
//                case "filter-like":
//                    if (filter.current) {
//                        filter.current.dataBinding("instance").update({
//                            "operator": e.currentTarget.dataset.value
//                        });
//                    }
//                    break;
//                case "filter-and":
//                case "filter-or":
//                    $.each(filter.selection, function (i, id) {
//                        dataBinding.instance(id).update({
//                            "connector": e.currentTarget.innerText
//                        });
//                    });
//                    break;
//                case "filter-combination":
//                    filter.condition.combination();
//                    break;
//                case "filter-dissolution":
//                    filter.condition.dissolution();
//                    break;
//            }
//        }
//    }
//};

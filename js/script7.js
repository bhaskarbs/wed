
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
;
/*!
Waypoints - 4.0.0
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.invokeAll('enable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;;
(function ($) {

  Drupal.behaviors.discoverySVGReplace = {
    attach: function (context, settings) {
      $('img[src$="svg"]').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);

        }, 'xml');
      });
    }
  }
})(jQuery);
;
(function ($) {
  "use strict";
  /* global Drupal, jQuery, Modernizr */
  Drupal.behaviors.discoveryObjectFit = {
    attach: function() {
      if ( ! Modernizr.objectfit ) {
        var $objectFitContainers = $('.bean-block-with-pre-title, .node--hero, .view-videos.view-display-id-block_1');
        $objectFitContainers.once('object-fit-polyfill', function() {
          var $this = $(this),
              $img = $this.find('.field__item > img'),
              src;
          if ($img.length) {
            src = $img.attr('src');
            $this.css({
              'backgroundImage': 'url(' + src + ')',
              'backgroundPosition': 'center top',
              'height': $img.height() + 'px'
            });
            $img.remove();
          }
        });
      }
    }
  };
})(jQuery);



;
(function ($) {

  Drupal.behaviors.discoveryHeaderAnimate = {
    attach: function (context, settings) {
      $('body', context).once('header-animation', function() {
        new Waypoint({
          element: $('.l-hero')[0],
          handler: function(direction) {
            $('.l-header-wrapper').toggleClass('header-active', direction === 'down');
          },
          offset: -250
        });
      });
    }
  }
})(jQuery);
;
(function ($) {

  Drupal.behaviors.discoverNodeNav = {
    attach: function (context, settings) {
      var $nav = $('.block--discovery-node-nav', context);
      $nav.once('node-nav-sticky', function() {
        $(window).on('load', function() {
          new Waypoint({
            element: $nav.get(0),
            handler: function(direction) {
              $nav.toggleClass('node-nav-sticky', direction === 'down');
            },
            'offset': 70 + ($('body').hasClass('navbar-administration') ? 39 : 0)
          });
        });
      });
    }
  };

  Drupal.behaviors.discoveryNodeNavLinks = {
    attach: function(context, settings) {
      var $nav = $('.block--discovery-node-nav', context);
      $nav.once('node-nav-links', function() {
        var $links = $nav.find('.block__content ul li a');
        $links.each(function(idx, el) {
          var $this = $(el),
              hash = $this.get(0).hash,
              $target = $(hash).parents('.entity-bean');

          if ($target.length) {
            $this.on('click', function(e) {
              $links.removeClass('active');
              $this.addClass('active');
              $('html, body').animate({
                'scrollTop': $target.offset().top - 150 + ($('body').hasClass('navbar-administration') ? 39 : 0) + 'px'
              }, 'fast');
              e.preventDefault();
            });
            $(window).on('load', function() {
              new Waypoint({
                element: $target.get(0),
                handler: function( direction) {
                  if (direction === 'down') {
                    $links.removeClass('active');
                    $links.filter('[href$="' + hash + '"]').addClass('active');
                  }
                  else {
                    $links.removeClass('active');
                    $links.filter('[href$="' + hash + '"]').addClass('active');
                  }
                },
                'offset': 150 + ($('body').hasClass('navbar-administration') ? 39 : 0) - 30
              });
            });
          }

        });

      });
    }
  };

})(jQuery);

;
(function ($) {

  Drupal.behaviors.discoveryTextSlider = {
    attach: function (context, settings) {
      $('body.front', context).once('text-slider', function() {
        //var $slider = $('.node--hero .field--name-title h1'),
        var $slider = $('.node--hero .field--name-title h2'),
            text = ['WORLD ENVIRONMENT DAY 2016.'],
            output = '';
        $.each(text, function(idx, val) {
          var spans = $.map(val.split(''), function(char) {
            return '<span>' + char + '</span>';
          });
          output += '<div class="slide">' + spans.join('') + '</div>';
        });
        $slider.html(output);
        var TextSlider = (function($) {

          var Sldr;

          var init = function() {

            // create new Sldr properties
            Sldr = new SliderProps($('.node--hero .field--name-title h1'),$(''), 0, 0, 0);

            // set slide total
            Sldr.total = Sldr.element.find('.slide').length - 1;

            // set default slide states
            Sldr.element.find('.slide').each(function(index) {

              // add active slide class
              if(index == 0) $(this).addClass('active');

            });

            // auto rotate
            autoRotate();

          };

          var previous = function() {

            // set up correct indexes of next slide
            Sldr.current = Sldr.next;
            Sldr.next = Sldr.next == 0 ? Sldr.total : Sldr.next - 1;

            // animate to new item
            animate();

          };

          var next = function() {

            // set up correct indexes of next slide
            Sldr.current = Sldr.next;
            Sldr.next = Sldr.next == Sldr.total ? 0 : Sldr.next + 1;

            // animate to new item
            animate();

          };

          var autoRotate = function() {

            setTimeout(function() {

              next();
              autoRotate();

            }, 5000);

          };

          var animate = function() {

            // set active slide
            Sldr.element.find('.slide').removeClass('active');

            setTimeout(function() {
              Sldr.element.find('.slide:eq(' + Sldr.next + ')').addClass('active');
            }, 1000);

          };

          return {
            init: init,
            next: next,
            previous: previous
          };

        }(jQuery));

        function SliderProps(element, navigation, total, next, current) {

          this.element = element;
          this.navigation = navigation;
          this.total = total;
          this.next = next;
          this.current = current;

        }

        //TextSlider.init();
      });
    }
  };

  Drupal.behaviors.discoveryScrollButton = {
    attach: function(context, settings) {
      $('body.front', context).once('scroll-button', function() {
        var $container = $('.node--hero .group-animated');
        $container.append('<div class="scroll"><a href="#"><span class="btn-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="svg-raw replaced-svg"><path d="M19.9 15l1.3 1.3-2.4 2.4-1.3 1.3-1.3-1.3-2.4-2.4 1.3-1.3 2.4 2.4 2.4-2.4z"></path></svg></span><span class="btn-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="svg-raw replaced-svg"><path d="M19.9 15l1.3 1.3-2.4 2.4-1.3 1.3-1.3-1.3-2.4-2.4 1.3-1.3 2.4 2.4 2.4-2.4z"></path></svg></span></a></div>');
        $container.on('click', 'a', function(e) {
          $('html, body').animate({ scrollTop: $('.l-content-wrapper').offset().top }, 1000, 'easeOutExpo');
          return false;
        });
        Drupal.attachBehaviors('.node--hero .group-animated .scroll');

      });
    }
  };

  Drupal.behaviors.discoveryWarfLogo = {
    attach: function(context, settings) {
      $('.bean-id-15').once('warf-logo', function() {
        $(this).find('.field--type-imag .field__item').append('<div class="logo-warf"><img src="/sites/all/themes/custom/discovery/images/logo/logo-warf.png" alt="ward"></div>')
      });
    }
  };

  Drupal.behaviors.discoveryFrontLoaded = {
    attach: function(context, settings) {
      $(window).on('load', function() {
        $('body.front').addClass('all-loaded');
      });
    }
  };

  Drupal.behaviors.discoveryExternalLinks = {
    attach: function (context, settings) {
      $('.front a', context)
        .filter(function() {
           return this.hostname && this.hostname !== location.hostname;
        })
        .addClass('external-link')
        .attr('target','_blank');
    }
  };
})(jQuery);



;
(function ($) {

  Drupal.behaviors.discoveryFortyFiveMinutes = {
    attach: function(context, settings) {
      $('.bean-id-19').once('group-tours', function() {
        $(this).find('.field--type-image .field__item').append('<div class="forty-five-minutes"><span>30-45</span> minutes</div>')
      });
    }
  };

})(jQuery);



;
(function ($) {

  Drupal.behaviors.discoveryVerticalLine = {
    attach: function (context, settings) {
      $('.bean-block-with-pre-titl, .node--hero', context).once('vertical-line', function() {
        $(this).append('<div class="vertical-line" />');
      });
    }
  }

  Drupal.behaviors.discoveryVerticalLineAnimate = {
    attach: function (context, settings) {
      $('body', context).once('vertical-line-animation', function() {
        setTimeout(function(){
          $('body').addClass('animate-in');
        }, 250);
      });
    }
  }
})(jQuery);



;
(function ($) {
  "use strict";
  /* global Drupal, jQuery, Waypoint */
  Drupal.behaviors.discoveryBeanAnimation = {
    attach: function (context) {
      var $bean = $('.entity-bean', context);
      $bean.each(function(idx, el) {
        var $el = $(el);
        $el.once('bean-animation', function() {
          $(window).on('load', function() {
            new Waypoint({
              element: el,
              handler: function(direction) {
                $el.toggleClass('bean-animated', (direction == 'down'));
              },
              offset: '70%'
            });
          });
        });
      });
    }
  };

  Drupal.behaviors.discoveryBT = {
    attach: function(context) {
      var $bean = $('entity-bean', context);
      $bean.each(function(idx, el) {
        var $el = $(el);
        $el.once('discovery-mobile-beautytips', function() {
          $el.on('click mouseover', '.bt-close', function() {
            $('.bt-wrapper').remove();
          });
        });
      });
    }
  };

  Drupal.behaviors.discoveryBeanHash = {
    attach: function() {
      if (location.hash) {
        $('.l-main-wrapper').css({'overflow': 'visible'});
        window.scrollTo(0, 0);
        setTimeout(function() {
          var $target = $(location.hash),
              offset = $target.offset().top - 150 + ($('body').hasClass('navbar-administration') ? 39 : 0);
          window.scrollTo(0, offset);
        }, 500);
      }
    }
  };
})(jQuery);
;
(function ($) {

  Drupal.behaviors.discoveryOffCanvas = {
    attach: function(context, settings) {
      $('body', context).once('off-canvas', function() {
        $('.block--discovery-off-canvas-off-canvas-toggle .block__content a').on('click', function() {
          // remove drop down class
          $('.dropdown-active').removeClass('dropdown-active');

          // toggle classes
          $('body').toggleClass('off-canvas-active');
        });
      });
    }
  };
})(jQuery);



;
(function ($) {

  Drupal.behaviors.discoveryDropdown = {
    attach: function (context, settings) {
      var $body = $('body', context);
      $body.once('menu-dropdown', function(e) {
        var $links = $('.l-header-wrapper a[data-dropdown]'),
            $dropdown = $('.l-dropdown'),
            $input = $dropdown.find('input.form-text');
        $links.on('click', function(e) {
          $body.toggleClass('dropdown-active');
          if ($body.hasClass('dropdown-active')) {
            $input.trigger('focus');
          }
          e.preventDefault();
        });
        $dropdown.on('focusout', function() {
          $body.removeClass('dropdown-active');
        })
      });
    }
  }
})(jQuery);
;
(function ($) {
  "use strict";
  /* global Drupal, jQuery */

  Drupal.behaviors.discoveryVideos = {
    attach: function(context) {
      var $form = $('.block--views .views-exposed-form', context),
          hideSelects = function() {
            $('.selectBox-options.views-widget-select-selectBox-dropdown-menu').hide();
            $('.selectBox').removeClass('selectBox-menuShowing');
          };
      $form.once('views-form-focus', function() {
        var $title = $form.find('.views-widget-filter-title'),
            $submit = $form.find('input.form-submit');
        $title.on('focusin, click', function() {
          $submit.addClass('focus');
        }).on('focusout', function() {
          $submit.removeClass('focus');
        });
      });
      $form.once('views-form-autosubmit', function() {
        var $select = $form.find('select'),
            $submit = $form.find('input.form-submit');
        $select.on('change', function() {
          $submit.trigger('click');
          $form.removeClass('views-mobile-form-visible');
          hideSelects();
        });
      });

      $form.once('views-mobile-toggle', function() {
        $('.views-mobile-form-toggle').on('click', function() {
          $form.toggleClass('views-mobile-form-visible');
          hideSelects();
        });
        $form.on('focusout', function() {
          $form.removeClass('views-mobile-form-visible');
          hideSelects();
        });
        $(window).on('scroll', function() {
          $form.removeClass('views-mobile-form-visible');
          hideSelects();
        });
      });
    }
  };

})(jQuery);



;
(function ($) {

  Drupal.behaviors.discoveryReadMore = {
    attach: function (context, settings) {
      $('.node--event.node--teaser, .node--event.node--teaser-with-month', context).once('read-more-toggle', function() {
        var $this = $(this);
        $this.find('.field--name-read-more-toggle a').on('click', function() {
          var top = $this.offset().top - $('.l-header-wrapper').height();
          $(this)
            .parents('.node--event')
            .toggleClass('read-more-open')
            .find('.group-ds_content')
            .slideToggle();
          $('html, body').animate({ 'scrollTop': top}, 'fast');
          return false;
        });
      });
    }
  };

})(jQuery);
;
(function ($) {
  /* global Drupal, jQuery */
  "use strict";

  Drupal.behaviors.equalHeightsModule = {
    attach: function() {
      var eqClass = false;
      if (Drupal.settings.equalHeightsModule) {
        eqClass = Drupal.settings.equalHeightsModule.classes;
      }
      if (eqClass) {
        equalHeightsTrigger();
        $(window).bind('resize', function () {
          equalHeightsTrigger();
        });
        $(document).ajaxSuccess(function() {
          equalHeightsTrigger();
        });

      }
      function equalHeightsTrigger() {
        $.each(eqClass, function(eqClass, setting) {
          var target = $(setting.selector);
          var minHeight = setting.minheight;
          var maxHeight = setting.maxheight;
          var overflow = setting.overflow;
          target.css('height', '');
          target.css('overflow', '');

          // Disable equalheights not matching the mediaquery
          var mediaQuery = setting.mediaquery;
          var matchMedia = window.matchMedia;
          if (mediaQuery) {
            if (matchMedia && !matchMedia(mediaQuery).matches) {
                return;
              } else {
                equalHeightsLoad(target, minHeight, maxHeight, overflow);
              }
            } else {
              equalHeightsLoad(target,minHeight, maxHeight, overflow);
          }
        });
      }
      function equalHeightsLoad(target, minHeight, maxHeight, overflow) {
          // disable imagesloaded for IE<=8
          var imagesLoadedIE8 = Drupal.settings.equalHeightsModule.imagesloaded_ie8;
          if (imagesLoadedIE8 && window.attachEvent && !window.addEventListener) {
              target.equalHeights(minHeight, maxHeight).css('overflow', overflow);
          } else {
          // imagesloaded library checks if all images are loaded before callback
           target.imagesLoaded({
           callback: function() {
             this.equalHeights(minHeight, maxHeight).css('overflow', overflow);
           }
          });
          }
      }

    }
  };
})(jQuery);
;
/*global Drupal:true */
(function ($) {

  Drupal.behaviors.discoveryProgramNavLinks = {
    attach: function(context, settings) {
      var $nav = $('.block--views-program-types-block-1', context);
      $nav.once('program-nav-links', function() {
        var $links = $nav.find('.block__content ul li a');
        $links.each(function(idx, el) {
          var $this = $(el),
              hash = $this.get(0).hash,
              $target = $(hash).parents('.views__group');

          if ($target.length) {
            $this.on('click', function(e) {
              $links.removeClass('active');
              $this.addClass('active');
              $('html, body').animate({
                'scrollTop': $target.offset().top - 150 + ($('body').hasClass('navbar-administration') ? 39 : 0) + 'px'
              }, 'fast');
              e.preventDefault();
            });

            $(window).on('load', function() {
              new Waypoint({
                element: $target.get(0),
                handler: function( direction) {
                  if (direction === 'down') {
                    $links.removeClass('active');
                    $links.filter('[href$="' + hash + '"]').addClass('active');
                  }
                  else {
                    $links.removeClass('active');
                    $links.filter('[href$="' + hash + '"]').addClass('active');
                  }
                },
                'offset': 150 + ($('body').hasClass('navbar-administration') ? 39 : 0) - 30
              });
            });
          }

        });

      });
    }
  };

})(jQuery);

;
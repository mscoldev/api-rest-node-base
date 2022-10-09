"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var express = require('express');

var cors = require('cors');

var Server = /*#__PURE__*/function () {
  function Server() {
    _classCallCheck(this, Server);

    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'; // Middlewares

    this.middlewares(); // Rutas de mi aplicación

    this.routes();
  }

  _createClass(Server, [{
    key: "middlewares",
    value: function middlewares() {
      // CORS
      this.app.use(cors()); // Lectura y parseo del body

      this.app.use(express.json()); // Directorio Público

      this.app.use(express["static"]('public'));
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log('Servidor corriendo en puerto', _this.port);
      });
    }
  }]);

  return Server;
}();

module.exports = Server;
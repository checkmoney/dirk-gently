#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const commandLineArgs = require('command-line-args');
const spawn = require('cross-spawn');

const optionDefinitions = [{ name: 'name', type: String }];
const args = commandLineArgs(optionDefinitions);

const orbName = args.name;

const orbDir = path.resolve(__dirname, '..', 'orbs', orbName);
const orbPath = path.resolve(orbDir, `${orbName}.yml`);
const orbVersionPath = path.resolve(orbDir, 'version');

const orbVersion = fs.readFileSync(orbVersionPath).toString();

const orbFullName = `checkmoney/${orbName}@${orbVersion}`;

spawn.sync('circleci', ['orb', 'publish', orbPath, orbFullName], {
  stdio: 'inherit',
});

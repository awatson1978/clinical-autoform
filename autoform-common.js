// This is the only file that is run on the server, too

// Extend the schema options allowed by SimpleSchema
SimpleSchema.extendOptions({
  autoform: Match.Optional(Object),
  placeholder: Match.Optional(Match.OneOf(String, Function)),
  inputType: Match.Optional(Match.OneOf(String, Function))
});

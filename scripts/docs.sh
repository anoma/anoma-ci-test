mix docs
echo "var versionNodes = [" > ./doc/.doc-versions.js
app=`mix run -e 'IO.puts(Mix.Project.config()[:app])'`; \
for v in $(git tag | tac); do echo "{version: \"$v\", url: \"https://anoma.github.io/anoma/$v/\"}," >> ./doc/.doc-versions.js; done
echo "]" >> ./doc/.doc-versions.js

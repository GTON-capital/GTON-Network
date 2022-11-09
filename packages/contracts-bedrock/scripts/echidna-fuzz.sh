#!/bin/bash
SCRIPTNAME=`basename "$0"`

# Reduce the time required to run Echidna by lowering the defaults
# Set ECHIDNA_TESTLIMIT to 100 if it's not set in the env.
# This determines the number of sequences of transactions to generate during testing.
# Echidna itself defaults to 50000
ECHIDNA_TESTLIMIT=${ECHIDNA_TESTLIMIT:-100}

# set ECHIDNA_SEQLEN to 10 if it's not set in the env.
# This determines the number of transactions to generate in a test sequence.
# Echidna itself defaults to 100
ECHIDNA_SEQLEN=${ECHIDNA_SEQLEN:-10}

# Setting this will ensure that the compiler includes the metadata hash, which echidna requires
export FOUNDRY_PROFILE="echidna"

printf "[$SCRIPTNAME] Cleaning hardhat build directory!\n"
npx hardhat clean
printf "\n\n"

printf "[$SCRIPTNAME] Compiling with hardhat!\n"
COMPILATION=$(npx hardhat compile 2>&1)
echo "$COMPILATION" | awk '1;/Error: Must compile with ast/{exit}'
printf "\n\n"

if [ -z "$(ls -A ./artifacts/build-info 2> /dev/null)" ]; then
   printf "Failed to compile, halting!\n"
   exit 1
fi

FILES=(./contracts/echidna/*)
for file in ${FILES[@]}
do
  # We assume that the contract name is the same as the filename without the extension
  basename=$(basename $file)
  CONTRACTNAME="${basename%.*}"
  printf "[$SCRIPTNAME] Fuzzing $CONTRACTNAME with $ECHIDNA_TESTLIMIT sequences of $ECHIDNA_SEQLEN\n"
  echidna-test --contract $CONTRACTNAME --test-limit $ECHIDNA_TESTLIMIT --seq-len $ECHIDNA_SEQLEN --crytic-args --hardhat-ignore-compile .
done

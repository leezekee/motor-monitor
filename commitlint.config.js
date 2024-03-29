module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feature',
                'feat',
                'bug',
                'fix',
                'bugfix',
                'refactor',
                'perf',
                'style',
                'test',
                'docs',
                'info',
                'format',
                'merge',
                'depend',
                'chore',
                'del',
            ],
        ],
        'subject-valid': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'subject-valid'({ subject }) {
                    console.log('it is a subject', subject);
                    return [
                        /^[\s\S]+?(issue\s+#\d+)$/i.test(subject),
                        'commit-msg should end with (issue #{issueId})',
                    ];
                },
            },
        },
    ],
};